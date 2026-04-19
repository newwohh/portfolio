import { useRef, useState, useEffect, type ReactNode } from 'react'
import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext'

/**
 * Uses @chenglou/pretext to find the narrowest container width
 * that keeps the same line count as the full width — producing
 * visually balanced, even-length lines (no orphaned last word).
 */
export default function BalancedText({
  children,
  as: Tag = 'p',
  font = '400 16px Inter',
  lineHeight = 24,
  className = '',
}: {
  children: ReactNode
  as?: keyof HTMLElementTagNameMap
  font?: string
  lineHeight?: number
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const [optimalWidth, setOptimalWidth] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const text = el.textContent ?? ''
    if (!text.trim()) return

    const fullWidth = el.offsetWidth
    const prepared = prepareWithSegments(text, font)
    const { lineCount: fullLineCount } = layoutWithLines(prepared, fullWidth, lineHeight)

    if (fullLineCount <= 1) return

    // Binary search for narrowest width that keeps the same line count
    let lo = fullWidth * 0.5
    let hi = fullWidth
    while (hi - lo > 1) {
      const mid = (lo + hi) / 2
      const { lineCount } = layoutWithLines(prepared, mid, lineHeight)
      if (lineCount <= fullLineCount) {
        hi = mid
      } else {
        lo = mid
      }
    }

    setOptimalWidth(Math.ceil(hi))
  }, [children, font, lineHeight])

  // @ts-expect-error - dynamic tag element
  return <Tag ref={ref} className={className} style={optimalWidth ? { maxWidth: optimalWidth } : undefined}>{children}</Tag>
}
