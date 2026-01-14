'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const router = useRouter()

  // 检测设备类型
  const detectDevice = () => {
    if (typeof window === 'undefined') return 'unknown'
    
    const userAgent = window.navigator.userAgent || window.navigator.vendor || (window as any).opera
    
    // 检测 iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      return 'ios'
    }
    
    // 检测 Android
    if (/android/i.test(userAgent)) {
      return 'android'
    }
    
    return 'unknown'
  }

  // 中间Download按钮 - 跳转到应用商店
  const handleStoreDownload = () => {
    const device = detectDevice()
    
    if (device === 'ios') {
      // 跳转到 App Store (请替换为实际的应用链接)
      window.open('https://apps.apple.com/app/your-app-id', '_blank')
    } else if (device === 'android') {
      // 跳转到 Google Play (请替换为实际的应用链接)
      window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank')
    } else {
      // 未知设备，跳转到下载页面
      router.push('/download')
    }
  }

  // 底部按钮 - 跳转到下载入口页面
  const handleDownloadPage = () => {
    router.push('/download')
  }

  const games = [
    { name: 'CRAZY 777 2', label: 'NEW', icon: '/res/A 老虎机@2x.png' },
    { name: 'FORTUNE GEMS 2', label: 'TOP', icon: '/res/A 老虎机@2x.png' },
    { name: 'CHICKEN ROAD 2', label: 'TOP', icon: '/res/A 老虎机@2x.png' },
    { name: 'MINES', label: 'HOT', icon: '/res/A 老虎机@2x.png' },
    { name: 'MINES', label: 'NEW', icon: '/res/A 老虎机@2x.png' },
    { name: 'MONEY COMING 2', label: 'HOT', icon: '/res/A 老虎机@2x.png' },
  ]

  return (
    <div className={styles.container}>
      {/* 顶部标题区域 */}
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Image
            src="/res/A 标题@2x.png"
            alt="Title"
            width={600}
            height={200}
            className={styles.titleImage}
            priority
          />
        </div>
        <div className={styles.hindiText}>
          जल्दी aa.game में शामलि हो और खुलकर मस्ती करो
        </div>
      </div>

      {/* 主视觉区域 - 印度美女和手机 */}
      <div className={styles.mainVisual}>
        <div className={styles.womanWrapper}>
          <Image
            src="/res/A 印度美女@2x.png"
            alt="Indian Woman"
            width={400}
            height={600}
            className={styles.womanImage}
            priority
          />
        </div>
        <div className={styles.phoneWrapper}>
          <Image
            src="/res/A 手机@2x.png"
            alt="Phone"
            width={300}
            height={500}
            className={styles.phoneImage}
          />
        </div>
        
        {/* 装饰效果 - 星星 */}
        <div className={styles.stars}>
          <Image
            src="/res/A 漫天星@2x.png"
            alt="Stars"
            width={200}
            height={200}
            className={styles.starsImage}
          />
        </div>

        {/* 装饰效果 - 爆炸 */}
        <div className={styles.explosion1}>
          <Image
            src="/res/A 爆炸@2x.png"
            alt="Explosion"
            width={150}
            height={150}
            className={styles.explosionImage}
          />
        </div>
        <div className={styles.explosion2}>
          <Image
            src="/res/A 爆炸2@2x.png"
            alt="Explosion 2"
            width={150}
            height={150}
            className={styles.explosionImage}
          />
        </div>
      </div>

      {/* JACKPOT WINNER 区域 */}
      <div className={styles.jackpotSection}>
        <div className={styles.jackpotText}>
          <span className={styles.crown}>👑</span>
          JACKPOT WINNER
        </div>
        <div className={styles.downloadBanner}>
          <button 
            className={styles.downloadButton}
            onClick={handleStoreDownload}
          >
            Download
          </button>
        </div>
        <div className={styles.agentBanner}>
          The only agent in India globally
        </div>
      </div>

      {/* 游戏图标网格 */}
      <div className={styles.gamesGrid}>
        <div className={styles.gamesContainer}>
          {games.map((game, index) => (
            <div key={index} className={styles.gameCard}>
              {game.label && (
                <div className={`${styles.gameLabel} ${styles[game.label.toLowerCase()]}`}>
                  {game.label}
                </div>
              )}
              <div className={styles.gameIcon}>
                <Image
                  src={game.icon}
                  alt={game.name}
                  width={120}
                  height={120}
                  className={styles.gameImage}
                />
              </div>
              <div className={styles.gameName}>{game.name}</div>
            </div>
          ))}
        </div>
        <div className={styles.coinsDecoration}></div>
      </div>

      {/* 底部下载按钮 */}
      <div className={styles.footer}>
        <button 
          className={styles.footerDownloadButton}
          onClick={handleDownloadPage}
        >
          Download now to experience
        </button>
      </div>

      {/* Banner装饰 */}
      <div className={styles.bannerDecoration}>
        <Image
          src="/res/A banner@2x.png"
          alt="Banner"
          width={800}
          height={200}
          className={styles.bannerImage}
        />
      </div>
    </div>
  )
}
