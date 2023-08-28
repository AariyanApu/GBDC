export interface TypingTitleProps {
  title: string | string[]
  textStyles?: string
}

// Types For Activities Section
export interface ActivitiesCardProps {
  imgUrl: string
  title: string
  description: string
  variants: any
  customStyle?: string
  imgSize?: string
}

export interface ButtonProps {
  variants: any
  text: string
  link: string
  icon?: any
  customStyle?: string
}
export interface counterCardProps {
  end: number
  imgSrc: string
  desc: string
}
export interface AchievementCardProps {
  src: string
}
export interface Review {
  imgUrl: string
}
