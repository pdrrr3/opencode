import { ComponentProps } from "solid-js"

export const SplashMark = (props: { class?: string }) => {
  return (
    <svg
      data-component="logo-splash"
      classList={{ [props.class ?? ""]: !!props.class }}
      width="308"
      height="212"
      viewBox="0 0 308 212"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 212C4.004 210.457 93.324 186.079 93.632 123.435C93.016 102.76 86.548 94.4279 68.684 94.4279C51.436 94.4279 34.496 104.611 23.1 117.263L13.244 115.412L31.416 16.9723H99.792C120.736 16.9723 132.132 14.195 145.992 -0.308594H151.844L131.824 54.0029H39.424L30.8 99.0567C41.272 88.5648 58.828 80.2329 77 80.2329C107.8 80.2329 134.288 89.1819 134.288 126.213C134.288 199.348 3.08 211.691 0 212ZM281.512 11.4178C277.508 12.9607 197.12 40.425 196.812 134.544C200.2 123.435 215.6 83.0102 253.176 83.0102C287.98 83.0102 307.384 110.166 307.384 140.408C307.384 187.622 272.58 212 233.156 212C179.256 212 155.848 174.352 155.848 128.99C155.848 21.6012 278.74 11.7263 281.512 11.4178ZM196.812 136.396C197.12 169.723 212.52 197.805 239.008 197.805C257.18 185.77 273.196 185.77 273.196 154.911C273.196 132.076 258.104 117.572 235.928 117.572C212.212 117.572 199.584 132.076 196.812 136.396Z" />
    </svg>
  )
}

export const Mark = (props: { class?: string }) => {
  return (
    <svg
      data-component="logo-mark"
      classList={{ [props.class ?? ""]: !!props.class }}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path data-slot="logo-logo-mark-shadow" d="M12 16H4V8H12V16Z" fill="var(--icon-weak-base)" />
      <path data-slot="logo-logo-mark-o" d="M12 4H4V16H12V4ZM16 20H0V0H16V20Z" fill="var(--icon-strong-base)" />
    </svg>
  )
}

export const Splash = (props: { ref?: (el: SVGSVGElement) => void; class?: string }) => {
  return (
    <svg
      ref={props.ref}
      data-component="logo-splash"
      classList={{ [props.class ?? ""]: !!props.class }}
      width="308"
      height="212"
      viewBox="0 0 308 212"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 212C4.004 210.457 93.324 186.079 93.632 123.435C93.016 102.76 86.548 94.4279 68.684 94.4279C51.436 94.4279 34.496 104.611 23.1 117.263L13.244 115.412L31.416 16.9723H99.792C120.736 16.9723 132.132 14.195 145.992 -0.308594H151.844L131.824 54.0029H39.424L30.8 99.0567C41.272 88.5648 58.828 80.2329 77 80.2329C107.8 80.2329 134.288 89.1819 134.288 126.213C134.288 199.348 3.08 211.691 0 212ZM281.512 11.4178C277.508 12.9607 197.12 40.425 196.812 134.544C200.2 123.435 215.6 83.0102 253.176 83.0102C287.98 83.0102 307.384 110.166 307.384 140.408C307.384 187.622 272.58 212 233.156 212C179.256 212 155.848 174.352 155.848 128.99C155.848 21.6012 278.74 11.7263 281.512 11.4178ZM196.812 136.396C197.120 169.723 212.52 197.805 239.008 197.805C257.18 197.805 273.196 185.77 273.196 154.911C273.196 132.076 258.104 117.572 235.928 117.572C212.212 117.572 199.584 132.076 196.812 136.396Z" />
    </svg>
  )
}

export const Logo = (props: { class?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 234 42"
      fill="none"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      <g>
        <path d="M18 30H6V18H18V30Z" fill="var(--icon-weak-base)" />
        <path d="M18 12H6V30H18V12ZM24 36H0V6H24V36Z" fill="var(--icon-base)" />
        <path d="M48 30H36V18H48V30Z" fill="var(--icon-weak-base)" />
        <path d="M36 30H48V12H36V30ZM54 36H36V42H30V6H54V36Z" fill="var(--icon-base)" />
        <path d="M84 24V30H66V24H84Z" fill="var(--icon-weak-base)" />
        <path d="M84 24H66V30H84V36H60V6H84V24ZM66 18H78V12H66V18Z" fill="var(--icon-base)" />
        <path d="M108 36H96V18H108V36Z" fill="var(--icon-weak-base)" />
        <path d="M108 12H96V36H90V6H108V12ZM114 36H108V12H114V36Z" fill="var(--icon-base)" />
        <path d="M144 30H126V18H144V30Z" fill="var(--icon-weak-base)" />
        <path d="M144 12H126V30H144V36H120V6H144V12Z" fill="var(--icon-strong-base)" />
        <path d="M168 30H156V18H168V30Z" fill="var(--icon-weak-base)" />
        <path d="M168 12H156V30H168V12ZM174 36H150V6H174V36Z" fill="var(--icon-strong-base)" />
        <path d="M198 30H186V18H198V30Z" fill="var(--icon-weak-base)" />
        <path d="M198 12H186V30H198V12ZM204 36H180V6H198V0H204V36Z" fill="var(--icon-strong-base)" />
        <path d="M234 24V30H216V24H234Z" fill="var(--icon-weak-base)" />
        <path d="M216 12V18H228V12H216ZM234 24H216V30H234V36H210V6H234V24Z" fill="var(--icon-strong-base)" />
      </g>
    </svg>
  )
}
