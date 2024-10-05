import Link from "next/link";
import styles from './Navbar.module.css'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavbarLinks = () => {
  const pathname = usePathname();
  const [dropdownRegist, setDropdownRegist] = useState(false);

  useEffect(() => {
    document.querySelectorAll(`.${styles.element}`).forEach((link) => {
    const href = (link as HTMLAnchorElement).getAttribute('href');
    if (href === pathname) {
        link.classList.add(styles.active);
    } else {
        link.classList.remove(styles.active);
    }
    });
  }, [pathname]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    document.querySelectorAll(`.${styles.element}`).forEach((link) => {
    link.classList.remove(styles.active);
    });
    event.currentTarget.classList.add(styles.active);
  };

  const handleDropdownRegist = (event: React.MouseEvent<HTMLElement>) => {
    handleClick;
    setDropdownRegist(!dropdownRegist);
  };

    return (
      
        <ul className='flex gap-5 md:gap-10'>
          <Link href={'/'} className={`${styles.element}`} onClick={handleClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_302_1373)">
                <path className={styles.icon} d="M2.25 12.0001L11.204 3.04507C11.644 2.60607 12.356 2.60607 12.795 3.04507L21.75 12.0001M4.5 9.75007V19.8751C4.5 20.4961 5.004 21.0001 5.625 21.0001H9.75V16.1251C9.75 15.5041 10.254 15.0001 10.875 15.0001H13.125C13.746 15.0001 14.25 15.5041 14.25 16.1251V21.0001H18.375C18.996 21.0001 19.5 20.4961 19.5 19.8751V9.75007M8.25 21.0001H16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_302_1373">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2 className={`font-medium text-nowrap ${styles.desc}`}>Home</h2>
          </Link>
          <Link href={'/about-us'} className={`${styles.element}`} onClick={handleClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_302_1387)">
                <path className={styles.icon} d="M11.25 11.25L11.291 11.23C11.4192 11.1659 11.5631 11.14 11.7057 11.1552C11.8482 11.1703 11.9834 11.2261 12.0952 11.3157C12.2071 11.4054 12.2909 11.5252 12.3368 11.661C12.3826 11.7968 12.3886 11.9429 12.354 12.082L11.646 14.918C11.6111 15.0572 11.6169 15.2034 11.6627 15.3394C11.7084 15.4754 11.7922 15.5954 11.9041 15.6852C12.016 15.775 12.1513 15.8308 12.294 15.846C12.4367 15.8612 12.5807 15.8352 12.709 15.771L12.75 15.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12ZM12 8.25H12.008V8.258H12V8.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_302_1387">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2 className={`font-medium text-nowrap ${styles.desc}`}>About Us</h2>
          </Link>
          <div className={`${styles.element}`} onClick={handleDropdownRegist}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_302_1389)">
                <path className={styles.icon} d="M16.862 4.487L18.549 2.799C18.9007 2.44733 19.3777 2.24976 19.875 2.24976C20.3723 2.24976 20.8493 2.44733 21.201 2.799C21.5527 3.15068 21.7502 3.62766 21.7502 4.125C21.7502 4.62235 21.5527 5.09933 21.201 5.451L10.582 16.07C10.0533 16.5984 9.40137 16.9867 8.685 17.2L6 18L6.8 15.315C7.01328 14.5986 7.40163 13.9467 7.93 13.418L16.862 4.487ZM16.862 4.487L19.5 7.125M18 14V18.75C18 19.3467 17.7629 19.919 17.341 20.341C16.919 20.763 16.3467 21 15.75 21H5.25C4.65326 21 4.08097 20.763 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V8.25C3 7.65327 3.23705 7.08097 3.65901 6.65901C4.08097 6.23706 4.65326 6 5.25 6H10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_302_1389">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2 className={`font-medium text-nowrap ${styles.desc}`}>Registration</h2>
            {dropdownRegist && 
            <div className={'${styles.dropdown} fixed flex flex-col bottom-24 lg:-bottom-72 bg-black/20 dark:bg-white/20 text-nowrap w-fit'}>
              <Link href="/event-registration" className={`${styles.dropdown_item} rounded-[20px]`}>Class Program</Link>
              <Link href="/event-registration" className={`${styles.dropdown_item} rounded-[20px]`}>Mentoring</Link>
              <Link href="/event-registration" className={`${styles.dropdown_item} rounded-[20px]`}>Project-Based Internship</Link>
              <Link href="/event-registration" className={`${styles.dropdown_item} rounded-[20px]`}>Main Event RSVP</Link>
            </div>}
          </div>
          <Link href={'/events'} className={`${styles.element}`} onClick={handleClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_302_1391)">
                <path className={styles.icon} d="M11.4799 3.49897C11.5222 3.3958 11.5942 3.30755 11.6868 3.24543C11.7794 3.18331 11.8884 3.15015 11.9999 3.15015C12.1114 3.15015 12.2204 3.18331 12.313 3.24543C12.4056 3.30755 12.4776 3.3958 12.5199 3.49897L14.6449 8.60997C14.6847 8.70561 14.7501 8.78841 14.8339 8.84928C14.9177 8.91015 15.0167 8.94672 15.1199 8.95497L20.6379 9.39697C21.1369 9.43697 21.3389 10.06 20.9589 10.385L16.7549 13.987C16.6764 14.0542 16.6178 14.1417 16.5857 14.2399C16.5536 14.3382 16.5492 14.4434 16.5729 14.544L17.8579 19.929C17.8837 20.037 17.877 20.1503 17.8385 20.2545C17.8 20.3587 17.7314 20.4491 17.6416 20.5144C17.5517 20.5797 17.4445 20.6168 17.3335 20.6212C17.2225 20.6256 17.1127 20.597 17.0179 20.539L12.2929 17.654C12.2047 17.6001 12.1033 17.5715 11.9999 17.5715C11.8965 17.5715 11.7951 17.6001 11.7069 17.654L6.98192 20.54C6.88718 20.598 6.77737 20.6266 6.66638 20.6222C6.55538 20.6178 6.44817 20.5807 6.35829 20.5154C6.26841 20.4501 6.19988 20.3597 6.16137 20.2555C6.12286 20.1513 6.11609 20.038 6.14192 19.93L7.42692 14.544C7.45075 14.4434 7.44637 14.3381 7.41426 14.2399C7.38215 14.1416 7.32355 14.0541 7.24492 13.987L3.04092 10.385C2.95626 10.3128 2.89493 10.2171 2.86468 10.1101C2.83443 10.003 2.83664 9.88942 2.87101 9.78362C2.90538 9.67782 2.97038 9.58461 3.05777 9.51578C3.14516 9.44695 3.25101 9.4056 3.36192 9.39697L8.87992 8.95497C8.98317 8.94672 9.08214 8.91015 9.16595 8.84928C9.24975 8.78841 9.31514 8.70561 9.35492 8.60997L11.4799 3.49897Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_302_1391">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2 className={`font-medium text-nowrap ${styles.desc}`}>Events</h2>
          </Link>
          <Link href={'/articles'} className={`${styles.element}`} onClick={handleClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_302_1393)">
                <path className={styles.icon} d="M12 7.5H13.5M12 10.5H13.5M6 13.5H13.5M6 16.5H13.5M16.5 7.5H19.875C20.496 7.5 21 8.004 21 8.625V18C21 18.5967 20.7629 19.169 20.341 19.591C19.919 20.0129 19.3467 20.25 18.75 20.25M16.5 7.5V18C16.5 18.5967 16.7371 19.169 17.159 19.591C17.581 20.0129 18.1533 20.25 18.75 20.25M16.5 7.5V4.875C16.5 4.254 15.996 3.75 15.375 3.75H4.125C3.504 3.75 3 4.254 3 4.875V18C3 18.5967 3.23705 19.169 3.65901 19.591C4.08097 20.0129 4.65326 20.25 5.25 20.25H18.75M6 7.5H9V10.5H6V7.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_302_1393">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2 className={`font-medium text-nowrap ${styles.desc}`}>Articles</h2>
          </Link>
          <Link href={'/contact-us'} className={`${styles.element}`} onClick={handleClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_302_1395)">
                <path className={styles.icon} d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_302_1395">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <h2 className={`font-medium text-nowrap ${styles.desc}`}>Contact Us</h2>
          </Link>
        </ul>
    )
}

export default NavbarLinks;