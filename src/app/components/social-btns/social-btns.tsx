import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIncon } from "../icons/linkedin-icon";
import { GitIcon } from "../icons/git-icon";
import { TwitterIncon } from "../icons/twitter-icon";

import './social-btns.scss'

interface SocialBtnsProps {

}
export function SocialBtns(props : SocialBtnsProps){
    return(
        <div className="social">
            <a href="">
                <InstaIcon/>
            </a>
            <a href="">
                <LinkedinIncon/>
            </a>
            <a href="">
                <GitIcon/>
            </a>
            <a href="">
                <TwitterIncon/>
            </a>
        </div>
    )
}