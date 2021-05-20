import HtmlLogo from '../assets/htmlLogo.svg'
import CssLogo from '../assets/cssLogo.svg'
import javaScriptLogo from '../assets/jsLogo.svg'
import reactLogo from '../assets/reactLogo.svg'
import typescriptLogo from '../assets/typescript.svg'
import figmaLogo from '../assets/figmaLogo.svg'

import '../styles/components/hardSkill.css'
export function HardSkill() {
    return (
        <div className='gallery'>
            <div>
                <img src={HtmlLogo} alt="" />
            </div>
            <div>
                <img src={CssLogo} alt="" />
            </div>
            <div>
                <img src={javaScriptLogo} alt="" />
            </div>
            <div>
                <img src={reactLogo} alt="" />
            </div>
            <div>
                <img src={typescriptLogo} alt="" />
            </div>
            <div>
                <img src={figmaLogo} alt="" />
            </div>
        </div>
    )
}