#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// 获取命令行参数
const iconName = process.argv[2]

if (!iconName) {
  console.log('使用方法: node scripts/add-icon.js <图标名称>')
  console.log('示例: node scripts/add-icon.js ArrowRight')
  process.exit(1)
}

// 读取 vite.config.mts
const configPath = path.resolve(process.cwd(), 'vite.config.mts')
const configContent = fs.readFileSync(configPath, 'utf-8')

// 查找图标配置
const iconRegex = /'@element-plus\/icons-vue':\s*\[([\s\S]*?)\]/g
const match = iconRegex.exec(configContent)

if (match) {
  const existingIcons = match[1]
    .split(',')
    .map((item) => item.trim().replace(/['"]/g, ''))
    .filter(Boolean)

  // 检查图标是否已存在
  if (existingIcons.includes(iconName)) {
    console.log(`✅ 图标 ${iconName} 已经存在于配置中`)
    process.exit(0)
  }

  // 添加新图标
  const allIcons = [...existingIcons, iconName].sort()
  const newIconConfig = `'@element-plus/icons-vue': [\n              '${allIcons.join("',\n              '")}'\n            ]`

  const updatedContent = configContent.replace(iconRegex, newIconConfig)
  fs.writeFileSync(configPath, updatedContent, 'utf-8')

  console.log(`✅ 成功添加图标: ${iconName}`)
  console.log(`📝 请重新启动开发服务器以应用更改`)
} else {
  console.error('❌ 无法找到图标配置，请检查 vite.config.mts 文件')
  process.exit(1)
}
