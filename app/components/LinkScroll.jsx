import { Link } from "react-scroll";

export default function LinkScroll({
  to,
  children,
  duration = 500,
  activeClass,
  spy,
  smooth = true,
  hashSpy,
  offset,
  delay,
  isDynamic,
  onSetActive,
  onSetInactive,
  ignoreCancelEvents,
  spyThrottle,
  className,
  onClick,
}) {
  return (
    <Link
      to={to}
      smooth={smooth}
      duration={duration}
      activeClass={activeClass}
      spy={spy}
      hashSpy={hashSpy}
      offset={offset}
      delay={delay}
      isDynamic={isDynamic}
      onSetActive={onSetActive}
      onSetInactive={onSetInactive}
      ignoreCancelEvents={ignoreCancelEvents}
      spyThrottle={spyThrottle}
      className={`cursor-pointer ${className}`}
    >
      <div onClick={onClick}>{children}</div>
    </Link>
  );
}
