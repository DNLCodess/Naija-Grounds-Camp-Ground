import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="mb-10">
            <Image
              src="/hilink-logo.svg" // Ensure path is correct
              alt="logo"
              width={74}
              height={29}
              priority
            />
          </div>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={`footer-links-${index}`}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, linkIndex) => (
                    <li key={`footer-link-${linkIndex}`}>{link.label}</li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn
                title={FOOTER_CONTACT_INFO.title}
                key="footer-contact"
              >
                {FOOTER_CONTACT_INFO.links.map((link, linkIndex) => (
                  <div
                    key={`contact-link-${linkIndex}`}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title} key="footer-socials">
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link, socialIndex) => (
                    <li key={`social-link-${socialIndex}`}>
                      {link.icon ? ( // Check if the icon exists
                        <Image
                          src={link.icon}
                          alt={`${link.label}-icon`}
                          width={24}
                          height={24}
                        />
                      ) : (
                        <span>{link.label}</span> // Fallback if no icon
                      )}
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 DNLCodess | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;