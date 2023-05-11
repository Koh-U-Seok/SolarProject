/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import { gsap } from "gsap";
import { Tween, SplitChars, Reveal } from "react-gsap";
import { motion } from "framer-motion";
import styled from "styled-components";
import "../css/Font.css";
import "../css/RankList.css";

export default function Sosim(props) {
  const { overrides, ...rest } = props;
  const timeline = React.useMemo(() => gsap.timeline({ paused: true }), []);
  const h1Ref = React.useRef(0);
  const divRef = React.useRef(0);
  const [drop, setDrop] = React.useState(false);

  React.useEffect(() => {
    timeline.from(divRef.current.childNodes, {
      y: 100,
      opacity: 0,
      ease: "power4.inOut",
      duration: 0.7,
      stagger: 0.1,
    });
  }, []);

  React.useEffect(() => {
    if (drop) {
      timeline.play();
    } else {
      timeline.reverse();
    }
  }, [drop]);

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 0.94 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const colors = ["rgba(255,217,255,0.65)", "#1b4943"];

  const toogleBackground = () => {
    const color = getRandonColor();
    if (background === color) {
      toogleBackground();
    }
    setBackground(getRandonColor());
  };

  const getRandonColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [background, setBackground] = React.useState(getRandonColor());
  const appRef = React.useRef(background);

  React.useEffect(() => {
    gsap.to(appRef.current, {
      backgroundColor: background,
      duration: 0.3,
      ease: "none",
    });
  }, [background]);

  return (
    <Flex
      marginTop={{ base: "30px", large: "35px" }}
      gap="0"
      direction={{ base: "column", small: "row" }}
      width="100%"
      height={{ small: "unset", medium: "29vh" }}
      justifyContent="flex-start"
      alignItems={{ base: "flex-end", small: "flex-start" }}
      position="relative"
      padding="0px 0px 0px 0px"
      boxShadow="31px 19px 21px rgba(0, 0, 0, 0.25)"
      borderRadius="35px"
      backgroundColor={{
        base: "rgba(252,089,0,0.63)",
        small: "rgba(252,253,254,1)",
      }}
      {...getOverrideProps(overrides, "Sosim")}
      {...rest}
    >
      <Flex
        ref={appRef}
        backgroundColor={{
          base: "rgba(038,069,061,1)",
          small: "rgba(252,253,254,1)",
        }}
        gap="10px"
        direction="column"
        width={{ base: "174.15px", small: "unset" }}
        height={{ small: "unset", medium: "29vh" }}
        justifyContent="flex-end"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="35px 0px 0px 35px"
        padding="27px 38px 27px 38px"
        backgroundImage="linear-gradient(-90deg, rgba(32,32,32,0.85), rgba(32,32,32,0.88))"
        {...getOverrideProps(overrides, "Frame 202")}
      >
        <Flex
          onClick={() => toogleBackground()}
          gap="7px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 56")}
        >
          <Text
            style={{ cursor: "pointer" }}
            fontFamily="ffProBook"
            fontSize={{ base: "24x", small: "29px" }}
            fontWeight="800"
            color="rgba(252,253,254,1)"
            lineHeight="42.35795211791992px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="So Easy So Simple "
            {...getOverrideProps(overrides, "So Easy So Simple")}
          ></Text>

          <Text
            display={{
              base: "block",
              small: "none",
              medium: "none",
              large: "none",
            }}
            fontFamily="ffProBook"
            fontSize="12px"
            fontWeight="500"
            color="rgba(252,253,254,1)"
            lineHeight="22.99431800842285px"
            textAlign="left"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create a new Deposit  and Swap it one of your&#xA;own Defi"
            {...getOverrideProps(
              overrides,
              "Create a new Deposit and Swap it one of your own Defi"
            )}
          ></Text>
        </Flex>
      </Flex>

      <motion.div
        style={{
          display: "flex",
          gap: "10px",
          direction: "column",
          width: "174.15px",
          height: "29vh",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          shrink: "0",
          position: "relative",
          borderRadius: "0px 35px 35px 0px",
          padding: "38px 27px 38px 27px",
          backgroundColor: "rgba(252,253,254,1)",
        }}
      >
        <Flex
          gap="14px"
          direction="column"
          width="unset"
          height={{ small: "unset", medium: "unset" }}
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 55")}
        >
          <Flex
            gap="14px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 55")}
          >
            <Text
              style={{ cursor: "grab" }}
              marginTop="9px"
              marginBottom="17px"
              fontFamily="ffProBold"
              fontSize="15px"
              fontWeight="500"
              lineHeight="18.15340805053711px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              ref={h1Ref}
              children={"Create"}
              // children={drop ? "Close" : "Create Click"}
              // onClick={() => setDrop(!drop)}
              // {...getOverrideProps(overrides, "CREATE")}
            ></Text>

            <Flex
              gap="38px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              ref={divRef}
              {...getOverrideProps(overrides, "Frame 54")}
            >
              <Flex
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ cursor: "pointer" }}
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 49")}
              >
                <Icon
                  width="25px"
                  height="25px"
                  viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
                  paths={[
                    {
                      d: "M19.8584 22.6074C17.793 24.1113 15.249 25 12.5 25C7.0752 25 2.45605 21.543 0.727539 16.709C0.844727 16.792 1.01562 16.8848 1.11328 16.9238C1.90918 17.2852 3.07129 16.6602 4.18457 15.5225C4.52148 15.1855 4.8877 14.917 5.29785 14.6777C6.19141 14.0967 7.13379 13.6621 8.14941 13.3496C8.14941 13.3496 9.23828 15.0195 10.2539 17.002C11.2695 18.9844 9.16504 19.6387 8.92578 19.6387C8.91113 19.6387 8.88672 19.6387 8.85254 19.6338C8.31543 19.6094 5.43457 19.4873 6.11816 22.1289C6.8457 24.9316 10.8789 23.916 12.9346 22.5635C14.9902 21.2109 14.4824 16.7871 14.4824 16.7871C16.4893 16.4746 17.1191 18.5986 17.3096 19.6875C17.3486 19.9121 17.3633 20.1709 17.3779 20.4443C17.4316 21.4795 17.4902 22.6709 19.1016 22.71C19.3604 22.71 19.6191 22.6709 19.8584 22.6123L19.8584 22.6074ZM15.2051 21.4502C15.1074 21.4258 15.0342 21.3281 15.0586 21.2061C15.1074 21.084 15.2051 21.0352 15.3027 21.0596C15.4004 21.084 15.4736 21.2061 15.4492 21.3037C15.4248 21.4014 15.3271 21.4746 15.2051 21.4502ZM5.09766 16.7822C5.1709 16.7578 5.26855 16.8311 5.29297 16.9287C5.29297 17.0264 5.24414 17.124 5.14648 17.124C5.07324 17.1484 4.97559 17.0752 4.95117 16.9775C4.92676 16.9043 5 16.8066 5.09766 16.7822ZM22.0605 20.5566C23.8916 18.3789 25 15.5664 25 12.5C25 9.2041 23.7256 6.20605 21.6406 3.96973C21.6357 5.11719 21.3428 6.32324 20.8203 7.34863C20.2393 8.33984 18.4277 10.2246 17.4121 11.1914C17.3779 11.2061 17.3584 11.2354 17.3389 11.2598C17.3291 11.2695 17.3242 11.2793 17.3145 11.2891C17.0703 11.626 17.1191 12.1094 17.4609 12.3535C18.501 13.125 20.2148 14.5801 20.3613 15.9082C20.5322 17.6123 21.7236 19.5996 22.0312 20.1172C22.0703 20.1807 22.0947 20.2197 22.0996 20.2344C22.0996 20.3418 22.0801 20.4443 22.0605 20.5518L22.0605 20.5566ZM19.0771 12.2559C19.0527 12.4023 19.126 12.5439 19.2725 12.5684C19.4189 12.5928 19.5605 12.5195 19.585 12.373C19.6094 12.2266 19.5361 12.085 19.3896 12.0605C19.2432 12.0117 19.1016 12.1094 19.0771 12.2559ZM22.0752 9.28223L21.5186 9.5459L21.3721 10.1758L21.1084 9.61914L20.4785 9.47266L21.0352 9.20898L21.1816 8.5791L21.4453 9.13574L22.0752 9.28223ZM19.3115 2.0166C18.5205 2.41699 18.2324 3.61816 17.8955 5.01465C17.8809 5.08301 17.8613 5.15137 17.8467 5.21973C17.3828 7.09961 16.3525 7.05566 15.8105 7.03613C15.7568 7.03613 15.7129 7.03125 15.6689 7.03125C15.4199 7.03125 15.376 6.83594 15.2344 6.19629C15.1074 5.60547 14.8975 4.63379 14.3604 3.09082C13.252 -0.12207 10.3223 0.678711 8.10059 2.00684C5.40039 3.62305 6.4209 6.98242 7.13379 9.30176C7.16797 9.40918 7.20215 9.5166 7.23145 9.62402C7.03613 9.81934 6.55762 9.99023 5.96191 10.2051C5.37109 10.415 4.66309 10.6689 3.99414 11.0303C2.33887 11.9092 0.561523 13.4229 0.0976562 14.0869C0.0341797 13.5645 0 13.0371 0 12.5C0 5.5957 5.5957 0 12.5 0C15.0098 0 17.3535 0.742187 19.3115 2.0166ZM2.87598 9.25781C2.80273 9.16016 2.65625 9.11133 2.56348 9.18457C2.4707 9.25781 2.41699 9.4043 2.49023 9.49707C2.56348 9.58984 2.70996 9.64355 2.80273 9.57031C2.9248 9.49707 2.94922 9.35059 2.87598 9.25781ZM15.9814 3.16895C16.0791 3.0957 16.2256 3.14453 16.2939 3.24219C16.3672 3.36426 16.3428 3.50586 16.2207 3.55469C16.123 3.62793 15.9766 3.5791 15.9082 3.48145C15.8398 3.38379 15.8838 3.2373 15.9814 3.16895ZM4.64355 5.12695C4.61914 5.2002 4.66797 5.27344 4.74121 5.27344C4.81445 5.29785 4.8877 5.24902 4.8877 5.17578C4.91211 5.10254 4.86328 5.0293 4.79004 5.0293C4.7168 5.0293 4.64355 5.05371 4.64355 5.12695ZM8.7793 5.10254C8.6084 2.99805 10.5908 2.46582 10.5908 2.46582C12.7441 1.71387 13.3252 2.75391 13.833 4.30176C14.3408 5.84961 13.9795 6.38184 11.9482 7.17773C9.91699 7.97363 8.92578 6.95801 8.7793 5.09766L8.7793 5.10254ZM13.1543 5.83008L13.2031 5.83008C13.3252 5.83008 13.4473 5.73242 13.4473 5.58594C13.5449 5.24902 13.4961 4.88281 13.3496 4.57031C13.2764 4.47266 13.1543 4.39941 13.0371 4.44824C12.8906 4.49707 12.8174 4.64355 12.8662 4.78516C12.9639 5.00488 13.0127 5.26855 12.9395 5.5127C12.915 5.65918 13.0127 5.80078 13.1592 5.8252L13.1543 5.83008ZM12.6709 3.79883C12.5732 3.79883 12.4756 3.75 12.4268 3.65234C12.3779 3.55469 12.3291 3.48145 12.2803 3.4082C12.1826 3.31055 12.1826 3.14453 12.2803 3.04688C12.3779 2.94922 12.5439 2.94922 12.6416 3.04688C12.7393 3.16895 12.8125 3.29102 12.8857 3.4082C12.959 3.52539 12.9102 3.69629 12.7637 3.76953C12.7344 3.76953 12.7148 3.7793 12.7002 3.78418C12.6904 3.78906 12.6807 3.79395 12.6709 3.79395L12.6709 3.79883Z",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Vector41212688")}
                ></Icon>
                <Text
                  fontFamily="ffProBook"
                  fontSize="12px"
                  fontWeight="800"
                  color="rgba(54,43,33,0.8)"
                  lineHeight="18.15340805053711px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Defi"
                  {...getOverrideProps(overrides, "Defi")}
                ></Text>
              </Flex>
              <Flex
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ cursor: "pointer" }}
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 50")}
              >
                <Icon
                  width="25px"
                  height="25px"
                  viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
                  paths={[
                    {
                      d: "M11.3525 0.25271C12.0801 -0.0842367 12.9199 -0.0842367 13.6475 0.25271L24.3213 5.18483C24.7363 5.37528 25 5.79036 25 6.24939C25 6.70842 24.7363 7.1235 24.3213 7.31395L13.6475 12.2461C12.9199 12.583 12.0801 12.583 11.3525 12.2461L0.678711 7.31395C0.263672 7.11862 0 6.70354 0 6.24939C0 5.79524 0.263672 5.37528 0.678711 5.18483L11.3525 0.25271ZM21.7236 10.2342L24.3213 11.4354C24.7363 11.6259 25 12.041 25 12.5C25 12.959 24.7363 13.3741 24.3213 13.5646L13.6475 18.4967C12.9199 18.8336 12.0801 18.8336 11.3525 18.4967L0.678711 13.5646C0.263672 13.3692 0 12.9541 0 12.5C0 12.0459 0.263672 11.6259 0.678711 11.4354L3.27637 10.2342L10.6982 13.6622C11.8408 14.1896 13.1592 14.1896 14.3018 13.6622L21.7236 10.2342ZM14.3018 19.9128L21.7236 16.4848L24.3213 17.6861C24.7363 17.8765 25 18.2916 25 18.7506C25 19.2096 24.7363 19.6247 24.3213 19.8152L13.6475 24.7473C12.9199 25.0842 12.0801 25.0842 11.3525 24.7473L0.678711 19.8152C0.263672 19.6198 0 19.2048 0 18.7506C0 18.2965 0.263672 17.8765 0.678711 17.6861L3.27637 16.4848L10.6982 19.9128C11.8408 20.4402 13.1592 20.4402 14.3018 19.9128Z",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Vector41212691")}
                ></Icon>
                <Text
                  fontFamily="ffProBook"
                  fontSize="12px"
                  fontWeight="800"
                  color="rgba(54,43,33,0.8)"
                  lineHeight="18.15340805053711px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Deposit"
                  {...getOverrideProps(overrides, "Deposit")}
                ></Text>
              </Flex>
              <Flex
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ cursor: "pointer" }}
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 51")}
              >
                <Icon
                  width="25px"
                  height="25px"
                  viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
                  paths={[
                    {
                      d: "M17.1875 12.5C17.1875 13.584 17.1289 14.6289 17.0264 15.625L7.97363 15.625C7.86621 14.6289 7.8125 13.584 7.8125 12.5C7.8125 11.416 7.87109 10.3711 7.97363 9.375L17.0264 9.375C17.1338 10.3711 17.1875 11.416 17.1875 12.5ZM18.5938 9.375L24.6045 9.375C24.8633 10.376 25 11.4209 25 12.5C25 13.5791 24.8633 14.624 24.6045 15.625L18.5938 15.625C18.6963 14.6191 18.75 13.5742 18.75 12.5C18.75 11.4258 18.6963 10.3809 18.5938 9.375ZM24.0918 7.8125L18.3936 7.8125C17.9053 4.69238 16.9385 2.08008 15.6934 0.410156C19.5166 1.4209 22.627 4.19434 24.0869 7.8125L24.0918 7.8125ZM16.8115 7.8125L8.18848 7.8125C8.48633 6.03516 8.94531 4.46289 9.50684 3.18848C10.0195 2.03613 10.5908 1.20117 11.1426 0.673828C11.6895 0.15625 12.1436 0 12.5 0C12.8564 0 13.3105 0.15625 13.8574 0.673828C14.4092 1.20117 14.9805 2.03613 15.4932 3.18848C16.0596 4.45801 16.5186 6.03027 16.8115 7.8125ZM6.60645 7.8125L0.908203 7.8125C2.37305 4.19434 5.47852 1.4209 9.30664 0.410156C8.06152 2.08008 7.09473 4.69238 6.60645 7.8125ZM0.395508 9.375L6.40625 9.375C6.30371 10.3809 6.25 11.4258 6.25 12.5C6.25 13.5742 6.30371 14.6191 6.40625 15.625L0.395508 15.625C0.136719 14.624 0 13.5791 0 12.5C0 11.4209 0.136719 10.376 0.395508 9.375ZM9.50684 21.8066C8.94043 20.5371 8.48633 18.9648 8.18848 17.1875L16.8115 17.1875C16.5137 18.9648 16.0547 20.5371 15.4932 21.8066C14.9805 22.959 14.4092 23.7939 13.8574 24.3213C13.3105 24.8438 12.8564 25 12.5 25C12.1436 25 11.6895 24.8438 11.1426 24.3262C10.5908 23.7988 10.0195 22.9639 9.50684 21.8115L9.50684 21.8066ZM6.60645 17.1875C7.09473 20.3076 8.06152 22.9199 9.30664 24.5898C5.47852 23.5791 2.37305 20.8057 0.908203 17.1875L6.60645 17.1875ZM24.0918 17.1875C22.627 20.8057 19.5215 23.5791 15.6982 24.5898C16.9434 22.9199 17.9053 20.3076 18.3984 17.1875L24.0918 17.1875Z",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Vector41212694")}
                ></Icon>
                <Text
                  fontFamily="ffProBook"
                  fontSize="12px"
                  fontWeight="800"
                  color="rgba(54,43,33,0.8)"
                  lineHeight="18.15340805053711px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="With Draw"
                  {...getOverrideProps(overrides, "With Draw")}
                ></Text>
              </Flex>
              <Flex
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ cursor: "pointer" }}
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 53")}
              >
                <Icon
                  width="25px"
                  height="25px"
                  viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
                  paths={[
                    {
                      d: "M12.5189 4.70424L6.26894 9.40848L12.5189 14.1127L6.26894 18.817L0 14.0681L6.2642 9.36384L0 4.70424L6.2642 0L12.5189 4.70424ZM6.23106 20.2958L12.4811 15.5915L18.7311 20.2958L12.4811 25L6.23106 20.2958ZM12.5189 14.0681L18.7689 9.36384L12.5189 4.69866L18.7358 0L25 4.70424L18.7358 9.40848L25 14.1071L18.7358 18.8114L12.5189 14.0681Z",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Vector41212697")}
                ></Icon>
                <Text
                  fontFamily="ffProBook"
                  fontSize="12px"
                  fontWeight="800"
                  color="rgba(54,43,33,0.8)"
                  lineHeight="18.15340805053711px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Swap"
                  {...getOverrideProps(overrides, "Swap")}
                ></Text>
              </Flex>
              <Flex
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={{ cursor: "pointer" }}
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame 52")}
              >
                <Icon
                  width="25px"
                  height="25px"
                  viewBox={{ minX: 0, minY: 0, width: 25, height: 25 }}
                  paths={[
                    {
                      d: "M18.8047 11.8049C18.9873 11.7826 19.1722 11.7826 19.3547 11.8049C19.4529 11.5916 19.47 11.2241 19.3813 10.8243C19.2495 10.2302 19.0709 9.86997 18.7024 9.92621C18.334 9.98245 18.3198 10.4129 18.4517 11.0075C18.5262 11.3416 18.6581 11.6278 18.8065 11.8049L18.8047 11.8049ZM15.6373 12.2771C15.9017 12.3884 16.0631 12.4586 16.127 12.3957C16.2388 12.2876 15.9212 11.8728 15.4102 11.6668C15.1152 11.5517 14.7937 11.5101 14.4766 11.546C14.1596 11.5819 13.8577 11.6941 13.6 11.8717C13.4226 11.9931 13.2565 12.1624 13.2801 12.2648C13.3304 12.4731 13.8715 12.1139 14.6166 12.071C15.0306 12.0465 15.3736 12.1685 15.6373 12.2776L15.6373 12.2771ZM15.1051 12.5627C14.5687 12.6418 14.218 12.9263 14.3085 13.1251C14.3617 13.144 14.3777 13.1702 14.6166 13.08C14.9695 12.9546 15.3509 12.9172 15.7237 12.9714C15.8964 12.9903 15.9786 13.0004 16.0158 12.9441C16.1022 12.8205 15.6781 12.4987 15.1057 12.5627L15.1051 12.5627ZM18.3086 13.5149C18.5085 13.1323 17.664 12.7392 17.4629 13.1251C17.2618 13.511 18.1087 13.8979 18.3098 13.5132L18.3086 13.5149ZM19.2347 12.3751C18.7817 12.3678 18.7645 13.2548 19.2193 13.2621C19.6741 13.2693 19.6912 12.3817 19.2359 12.3734L19.2347 12.3751ZM6.29596 16.7683C6.2179 16.7856 5.94113 16.849 5.79506 16.6375C5.48755 16.192 6.45208 15.5027 5.97248 14.6457C5.43432 13.673 4.32727 13.8918 3.8997 14.3373C3.38462 14.8718 3.38402 15.648 3.60402 15.6781C3.85653 15.7098 3.8453 15.3178 4.04045 15.0305C4.09498 14.9513 4.16565 14.883 4.24837 14.8297C4.33109 14.7763 4.42422 14.7389 4.52238 14.7197C4.62053 14.7004 4.72177 14.6996 4.82024 14.7174C4.91871 14.7352 5.01246 14.7712 5.09606 14.8234C5.78146 15.246 5.17708 15.8123 5.23089 16.417C5.31309 17.3457 6.32021 17.3285 6.50708 16.9181C6.51915 16.8978 6.52447 16.8746 6.52237 16.8515C6.52026 16.8284 6.51081 16.8064 6.49525 16.7884C6.49703 16.8379 6.53547 16.716 6.29714 16.7666L6.29596 16.7683ZM24.0207 15.8178C23.8226 15.1647 23.8687 15.3045 23.6197 14.6753C23.7646 14.4709 24.5239 13.3389 23.4382 12.267C22.8231 11.659 21.4334 11.3461 21.0076 11.2347C20.9189 10.6005 21.2826 7.96623 19.735 6.61318C20.9645 5.41325 21.7315 4.09138 21.7297 2.95771C21.7261 0.77724 18.8822 0.117975 15.3771 1.48383L14.635 1.78061C14.6314 1.77783 13.2919 0.540595 13.2718 0.523891C9.27709 -2.75684 -3.21692 10.3176 0.77783 13.4937L1.6507 14.1903C1.41514 14.7854 1.33206 15.4245 1.40824 16.0556C1.60694 17.9153 3.53719 19.4198 5.4018 19.4176C8.81581 26.8266 21.2448 26.8388 24.4613 19.5847C24.5642 19.3358 25 18.2143 25 17.2249C25 16.2354 24.4033 15.8178 24.0225 15.8178L24.0207 15.8178ZM5.3332 18.4994C3.98368 18.4655 2.52653 17.3218 2.38164 15.9654C2.01676 12.5516 6.7732 11.7743 7.3492 15.2788C7.61768 16.9292 7.07303 18.5356 5.33143 18.4978L5.3332 18.4994ZM4.23856 12.1407C3.34204 12.3049 2.55196 12.7832 2.06821 13.4464C1.77962 13.2198 1.24029 12.7782 1.14626 12.6112C0.376877 11.2275 1.98838 8.54643 3.11554 7.03135C5.90151 3.2879 10.2641 0.454847 12.2848 0.968784C12.613 1.0562 13.7006 2.24333 13.7006 2.24333C13.7006 2.24333 11.681 3.29793 9.80933 4.76847C7.28651 6.59759 5.38051 9.25581 4.23856 12.1407ZM18.3654 17.7728C18.3654 17.7728 16.2518 18.0679 14.2547 17.3791C14.6219 16.2566 15.8514 17.7188 19.9556 16.6102C20.8598 16.3663 22.0473 15.8863 22.9716 15.1987C23.1705 15.6313 23.3119 16.0854 23.3926 16.5506C23.6091 16.5138 24.2354 16.5216 24.0692 17.5584C23.8746 18.6648 23.3755 19.5629 22.5357 20.3893C22.0112 20.9244 21.3868 21.3643 20.6936 21.6872C20.3075 21.8777 19.9051 22.0375 19.4907 22.1649C16.3263 23.1382 13.0861 22.068 12.0394 19.7706C11.9545 19.5953 11.8843 19.414 11.8295 19.2283C11.3842 17.7138 11.762 15.8969 12.9436 14.7532C13.0164 14.6803 13.0903 14.5945 13.0903 14.4865C13.08 14.3935 13.0404 14.3055 12.9767 14.2337C12.5628 13.6697 11.1322 12.708 11.4196 10.8466C11.6266 9.51027 12.8679 8.5687 14.0258 8.62438L14.3215 8.64053C14.823 8.66837 15.2612 8.72907 15.6746 8.74521C16.3659 8.77305 16.9874 8.67895 17.7231 8.10154C17.9715 7.90665 18.1708 7.73738 18.5073 7.68337C18.6433 7.65166 18.7848 7.64636 18.9231 7.6678C19.0613 7.68925 19.1935 7.73698 19.3116 7.8081C19.9029 8.17782 19.9857 9.07373 20.0165 9.72854C20.0336 10.1027 20.0815 11.0092 20.0981 11.267C20.1353 11.8611 20.3009 11.9447 20.6368 12.0465C20.8255 12.105 21.0005 12.1484 21.2584 12.2169C22.0396 12.4235 22.5003 12.6334 22.7959 12.9024C22.9467 13.0414 23.0452 13.2231 23.0763 13.4196C23.1685 14.0527 22.5547 14.8339 20.929 15.5444C18.1667 16.7516 15.389 16.349 14.9868 16.3062C13.7952 16.1553 13.1163 17.6046 13.8307 18.5974C15.1696 20.4577 21.0691 19.7111 22.7823 17.4086C22.8231 17.353 22.7894 17.3201 22.7392 17.353C20.269 18.9443 16.9993 19.4805 15.1424 18.8007C14.8603 18.6977 14.2713 18.4421 14.1997 17.8725C16.7781 18.6236 18.3985 17.9137 18.3985 17.9137C18.3985 17.9137 18.5185 17.7583 18.3654 17.7728ZM9.38413 7.0152C10.3741 5.93777 11.5935 5.00066 12.6858 4.47447C12.694 4.46987 12.7037 4.46799 12.7132 4.46912C12.7227 4.47025 12.7315 4.47433 12.7383 4.48071C12.7451 4.48709 12.7494 4.49541 12.7506 4.50436C12.7518 4.51331 12.7498 4.52239 12.7449 4.53015C12.6586 4.67826 12.4912 4.99453 12.438 5.23452C12.4359 5.24277 12.4365 5.25143 12.4397 5.25935C12.443 5.26727 12.4487 5.27407 12.4561 5.27884C12.4636 5.28362 12.4724 5.28615 12.4814 5.28609C12.4904 5.28603 12.4992 5.28338 12.5066 5.2785C13.1861 4.84252 14.3682 4.37536 15.4043 4.31522C15.4141 4.31459 15.4238 4.31694 15.4321 4.32193C15.4403 4.32691 15.4466 4.33425 15.45 4.34288C15.4535 4.3515 15.4539 4.36094 15.4512 4.3698C15.4485 4.37866 15.4429 4.38647 15.4351 4.39206C15.2638 4.51635 15.1105 4.66124 14.9791 4.82303C14.9744 4.8292 14.9715 4.83647 14.9708 4.84406C14.9702 4.85165 14.9717 4.85927 14.9753 4.86609C14.9789 4.87292 14.9844 4.87869 14.9912 4.88278C14.9981 4.88686 15.0059 4.88912 15.014 4.88929C15.742 4.8943 16.768 5.13429 17.4387 5.48731C17.4836 5.51125 17.4517 5.59366 17.4008 5.58308C13.2878 4.69552 10.1222 6.61485 9.44681 7.07701C9.43781 7.08247 9.42704 7.08472 9.41643 7.08337C9.40582 7.08202 9.39607 7.07714 9.38894 7.06962C9.3818 7.0621 9.37776 7.05243 9.37753 7.04235C9.3773 7.03227 9.38089 7.02245 9.38767 7.01464L9.38413 7.0152Z",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  {...getOverrideProps(overrides, "Vector41212700")}
                ></Icon>
                <Text
                  fontFamily="ffProBook"
                  fontSize="12px"
                  fontWeight="800"
                  color="rgba(54,43,33,0.8)"
                  lineHeight="18.15340805053711px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Add Liquidity"
                  {...getOverrideProps(overrides, "Add Liquidity")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
