import React from "react";
import {
  HeaderContainer,
  ProfilePic,
  Name,
  TextContainer,
  Roles,
  ButtonContainer,
} from "./HeaderRow.styles.ts";
import PillButton from "./PillButton";
import { LinkedinLogo, GithubLogo, Envelope, FileText } from "phosphor-react";

const HeaderRow: React.FC = () => (
  <HeaderContainer>
    <ProfilePic src="/profile.jpg" alt="Ryan Shumway" />
    <TextContainer>
      <Name>Ryan Shumway</Name>
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
    </TextContainer>
  </HeaderContainer>
);

export default HeaderRow; 