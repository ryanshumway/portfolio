import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  ProfilePic,
  Name,
  TextContainer,
  Roles,
  ButtonContainer,
} from "./HeaderRow.styles.ts";
import PillButton from "./PillButton";
import { LinkedinLogo, GithubLogo, Envelope, FileText } from "phosphor-react";

interface HeaderRowProps {
  isScrolled: boolean;
}

const HeaderRow: React.FC<HeaderRowProps> = ({ isScrolled }) => (
  <HeaderContainer isScrolled={isScrolled}>
    <HeaderContent>
      <ProfilePic src="/profile.jpg" alt="Ryan Shumway" isScrolled={isScrolled} />
      <TextContainer>
        <Name isScrolled={isScrolled}>Ryan Shumway</Name>
        {!isScrolled && (
          <>
            <Roles>UX Design, Illustration, & Front End Vibe–Coder</Roles>
            <ButtonContainer>
              <PillButton
                iconLeft={true}
                icon={<LinkedinLogo size={24} weight="regular" />}
                link="https://www.linkedin.com/in/ryanshumway/"
              >
                LinkedIn
              </PillButton>
              <PillButton
                link="https://github.com/ryanshumway"
                iconLeft
                icon={<GithubLogo size={20} weight="regular" />}
              >
                Github
              </PillButton>
              <PillButton
                link="mailto:your@email.com"
                iconLeft
                icon={<Envelope size={20} weight="regular" />}
              >
                Email
              </PillButton>
              <PillButton
                link="/resume.pdf"
                iconLeft
                icon={<FileText size={20} weight="regular" />}
              >
                Resume
              </PillButton>
            </ButtonContainer>
          </>
        )}
      </TextContainer>
    </HeaderContent>
  </HeaderContainer>
);

export default HeaderRow; 