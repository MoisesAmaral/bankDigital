import React from 'react'
import {FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaLinkedin} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    WebSiteRights
} from '../Footer/FooterElements'

const Footer = () => {
    const toggleHome = ()=> {
        scroll.scrollToTop()
    }
  return (
    <FooterContainer>
        <FooterWrapper>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Abaute Us</FooterLinkTitle>
                        <FooterLink to="/sign-up">About us</FooterLink>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Services</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/">Contact</FooterLink>
                        <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Destinations</FooterLink>
                        <FooterLink to="/">Sponsorship</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/">Submit Video</FooterLink>
                        <FooterLink to="/">Ambassadors</FooterLink>
                        <FooterLink to="/">Agency</FooterLink>
                        <FooterLink to="/">Influencer</FooterLink>
                    </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
        <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
                dolla
            </SocialLogo>
            <WebSiteRights>dolla &copy; {new Date().getFullYear()} all rigghts reserved.</WebSiteRights>
            <SocialIcons>
                <SocialIconLink href="/"target="_blank"aria-label="Facebook">
                    <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href="/"target="_blank"aria-label="Instagram">
                    <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink href="/"target="_blank"aria-label="Youtube">
                    <FaYoutube/>
                </SocialIconLink>
                <SocialIconLink href="/"target="_blank"aria-label="Twitter">
                    <FaTwitter/>
                </SocialIconLink>
                <SocialIconLink href="/"target="_blank"aria-label="Linkedin">
                    <FaLinkedin/>
                </SocialIconLink>
            </SocialIcons>
        </SocialMediaWrap>
        </SocialMedia>
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer