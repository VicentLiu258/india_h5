'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './page.module.css'

export default function DownloadPage() {
  const [downloading, setDownloading] = useState<'ios' | 'android' | null>(null)
  const router = useRouter()

  const handleIOSDownload = () => {
    setDownloading('ios')
    // 模拟下载过程
    setTimeout(() => {
      setDownloading(null)
      alert('iOS 下载已开始！')
      // 实际应用中，这里可以跳转到 App Store
      // window.open('https://apps.apple.com/app/your-app-id', '_blank')
    }, 1500)
  }

  const handleAndroidDownload = () => {
    setDownloading('android')
    // 模拟下载过程
    setTimeout(() => {
      setDownloading(null)
      alert('Android 下载已开始！')
      // 实际应用中，这里可以跳转到 Google Play
      // window.open('https://play.google.com/store/apps/details?id=your.package.name', '_blank')
    }, 1500)
  }

  return (
    <div className={styles.container}>
      {/* 背景装饰 */}
      <div className={styles.bannerDecoration}>
        <Image
          src="/res/A banner@2x.png"
          alt="Banner"
          width={800}
          height={200}
          className={styles.bannerImage}
        />
      </div>

      {/* 返回按钮 */}
      <div className={styles.backButton}>
        <button onClick={() => router.back()} className={styles.backBtn}>
          ← 返回
        </button>
      </div>

      {/* 标题区域 */}
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
        <div className={styles.subtitle}>
          选择您的设备类型开始下载
        </div>
      </div>

      {/* 下载按钮区域 */}
      <div className={styles.downloadSection}>
        <div className={styles.downloadCard}>
          <div className={styles.platformIcon}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.18 7.59 9.5 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
            </div>
          </div>
          <h3 className={styles.platformTitle}>iOS 下载</h3>
          <p className={styles.platformDesc}>适用于 iPhone 和 iPad</p>
          <button
            className={`${styles.downloadBtn} ${styles.iosBtn}`}
            onClick={handleIOSDownload}
            disabled={downloading !== null}
          >
            {downloading === 'ios' ? (
              <span className={styles.loading}>下载中...</span>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.btnIcon}>
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                下载 iOS 版本
              </>
            )}
          </button>
        </div>

        <div className={styles.downloadCard}>
          <div className={styles.platformIcon}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997 0-.5511.4482-.9993.9993-.9993.551 0 .9993.4482.9993.9993 0 .5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997 0-.5511.4482-.9993.9993-.9993.551 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1349 1.0987L4.8429 5.4465a.4161.4161 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.186.8533 14.2369 2.0558 17.3266c.0007.0017.0017.0032.0024.0049.1124.2589.2706.5083.463.7371 4.0098 5.74 10.6167 5.6362 14.6154.4155.1955-.2288.3526-.4782.465-.7371.0007-.0017.0017-.0032.0024-.0049 1.2375-3.0757-.6248-6.1344-3.7618-7.9846m-.7996 7.5546c-.4118.4127-1.3796 1.4294-3.1004 1.5292-1.7209.0998-2.8101-.5963-3.2615-1.0092-.4514-.4128-3.5348-3.7019-3.2615-6.5808.2733-2.8789 2.6852-3.8934 3.137-4.3062.4518-.4128 1.5406-1.109 3.2615-1.0092 1.7208.0998 2.6886 1.1165 3.1004 1.5292.4118.4128 1.5406 1.6087 1.2673 4.4876-.2733 2.8789-2.6852 3.8934-3.137 4.3062"/>
              </svg>
            </div>
          </div>
          <h3 className={styles.platformTitle}>Android 下载</h3>
          <p className={styles.platformDesc}>适用于 Android 手机和平板</p>
          <button
            className={`${styles.downloadBtn} ${styles.androidBtn}`}
            onClick={handleAndroidDownload}
            disabled={downloading !== null}
          >
            {downloading === 'android' ? (
              <span className={styles.loading}>下载中...</span>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.btnIcon}>
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                下载 Android 版本
              </>
            )}
          </button>
        </div>
      </div>

      {/* 底部提示 */}
      <div className={styles.footer}>
        <p className={styles.footerText}>
          下载后即可开始游戏，享受精彩体验！
        </p>
      </div>
    </div>
  )
}
