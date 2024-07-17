import React from "react";
import Logo from "../assets/images/pacifichuntlogolight.svg";
import FacebookIcon from "../assets/icons/facebook.svg"
import TwitterIcon from "../assets/icons/twitter.svg"
import YoutubeIcon from "../assets/icons/youtube.svg"
import LinkedInIcon from "../assets/icons/linkedin.svg"

const Footer = () => {
  return (
    <div className="w-full bg-dark-2 pt-[64px] pb-[48px] flex justify-center items-center">
      <div className="w-[90%] flex flex-col gap-[64px]">
        <div className="w-full pb-[64px] flex justify-between border-b-[0.5px] border-light-7">
          <div className="w-1/4 flex flex-col gap-6">
            <img src={Logo} alt="" />
            <p className="text-16-normal text-light-6">
              Lorem ipsum dolor sit amet consectetur. Nibh leo amet sed orci
              ipsum lectus pretium diam. Placerat ipsum volutpat commodo
              sodales.
            </p>
          </div>

          <div className="flex gap-[80px]">
            <div>
              <p className="mb-[16px] text-light-1 text-18-medium">
                Job Seekers
              </p>
              <div className="flex flex-col gap-2 text-light-6 text-16-normal">
                <p>Search Jobs</p>
                <p>Explore Jobs</p>
                <p>Saved Jobs</p>
                <p>Applied Jobs</p>
              </div>
            </div>

            <div>
              <p className="mb-[16px] text-light-1 text-18-medium">Employers</p>
              <div className="flex flex-col gap-2 text-light-6 text-16-normal">
                <p>Register</p>
                <p>Post Jobs</p>
                <p>Applications</p>
                <p>My Job Postings</p>
              </div>
            </div>

            <div>
              <p className="mb-[16px] text-light-1 text-18-medium">Legal</p>
              <div className="flex flex-col gap-2 text-light-6 text-16-normal">
                <p>Cookies Policy</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between">
            <div className="text-light-6 text-16-normal">Copyright © 2024 Pacific Hunt. All rights reserved.</div>

            <div className="flex gap-6">
                <img src={FacebookIcon} alt="facebook" />
                <img src={TwitterIcon} alt="twitter" />
                <img src={YoutubeIcon} alt="youtube" />
                <img src={LinkedInIcon} alt="linkedin" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
