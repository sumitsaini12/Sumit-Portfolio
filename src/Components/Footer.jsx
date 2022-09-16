import React from "react";
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import ContectIcons from "./ContectIcons";
function Footer() {

    return (
        <div>
            <div className="h-24 w-full bg-black drop-shadow-lg flex flex-col justify-center items-center sm:justify-between p-3 sm:flex-row">
                <div class="sm:hidden">
                    <ContectIcons />
                </div>
                <p className="text-white sm:ml-10">Copyright © 2022 | SUMIT</p>
                <div class="sm:flex hidden">
                    <ContectIcons />
                </div>
                <p className="text-white sm:mr-10">Powered By Sumit Kumar</p>
            </div>
        </div>
    );
}

export default Footer;