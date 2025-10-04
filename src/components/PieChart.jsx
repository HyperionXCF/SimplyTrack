import React from 'react'

function polarToCartesian(cx, cy, r, angleDeg) {
  const angleRad = (angleDeg - 90) * Math.PI / 180.0
  return {
    x: cx + (r * Math.cos(angleRad)),
    y: cy + (r * Math.sin(angleRad))
  }
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
  return [`M ${cx} ${cy}`, `L ${start.x} ${start.y}`, `A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`, 'Z'].join(' ')
}

export default function PieChart({ data = [], size = 200, colors }) {
  const total = data.reduce((s, d) => s + Math.max(0, d.value || 0), 0)
  const cx = size / 2
  const cy = size / 2
  const r = (size / 2) - 2
  const defaultColors = ['#2563EB', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#F97316']

  let angle = 0

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data.map((slice, i) => {
          const value = Math.max(0, slice.value || 0)
          if (value === 0) return null
          const startAngle = angle
          const sliceAngle = (value / total) * 360
          const endAngle = angle + sliceAngle
          const path = describeArc(cx, cy, r, startAngle, endAngle)
          const fill = (colors && colors[i % colors.length]) || defaultColors[i % defaultColors.length]
          angle = endAngle
          return (
            <path key={slice.label} d={path} fill={fill} stroke="#fff" strokeWidth="1" />
          )
        })}
      </svg>

      <div className="mt-3 w-full">
        {data.map((slice, i) => {
          const value = slice.value || 0
          if (value === 0) return null
          const fill = (colors && colors[i % colors.length]) || defaultColors[i % defaultColors.length]
          const pct = total ? Math.round((value / total) * 100) : 0
          return (
            <div key={slice.label} className="flex items-center justify-between text-sm py-1">
              <div className="flex items-center gap-2">
                <span style={{ width: 12, height: 12, background: fill, display: 'inline-block', borderRadius: 3 }} />
                <span className="text-slate-700">{slice.label}</span>
              </div>
              <div className="text-slate-700">{pct}%</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
