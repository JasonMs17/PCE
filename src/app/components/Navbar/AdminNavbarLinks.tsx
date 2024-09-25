"use client"

import Link from "next/link";
import styles from './Navbar.module.css'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const AdminNavbarLinks = () => {
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
            <div className={`${styles.dropdown} absolute flex flex-col translate-y-full -bottom-10 bg-black/20 dark:bg-white/20 text-nowrap w-fit`}>
              <Link href="/admin/event-attendees" className={`${styles.dropdown_item} rounded-[20px]`}>Class Program</Link>
              <Link href="/admin/event-attendees" className={`${styles.dropdown_item} rounded-[20px]`}>Mentoring</Link>
              <Link href="/admin/event-attendees" className={`${styles.dropdown_item} rounded-[20px]`}>Project-Based Internship</Link>
              <Link href="/admin/event-attendees" className={`${styles.dropdown_item} rounded-[20px]`}>Main Event RSVP</Link>
            </div>}
          </div>
          <Link href={`/admin/articles`} className={`${styles.element}`} onClick={handleClick}>
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
        </ul>
    )
}

export default AdminNavbarLinks;