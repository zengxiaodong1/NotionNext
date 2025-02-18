import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div
      className={`gap-x-1 flex flex-wrap text-sm font-serif ${props.className || ''}`}>
      <span>备案信息：</span>
      <a
        href='https://beian.miit.gov.cn/'
        className='underline justify-start'>
        渝ICP备2025051009号-1
      </a>
      .
    </div>
  )
}
