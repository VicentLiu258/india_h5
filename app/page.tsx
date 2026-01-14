'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    // 模拟下载过程
    setTimeout(() => {
      setIsDownloading(false)
      // 这里可以添加实际的下载逻辑
      alert('下载已开始！')
    }, 2000)
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
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <Image
                src="/res/A 下载中@2x.png"
                alt="Downloading"
                width={200}
                height={60}
              />
            ) : (
              <Image
                src="/res/A 下载@2x.png"
                alt="Download"
                width={200}
                height={60}
              />
            )}
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
          onClick={handleDownload}
          disabled={isDownloading}
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
