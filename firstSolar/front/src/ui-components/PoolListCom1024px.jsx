/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Image,
  Text,
  Pagination,
  usePagination,
} from "@aws-amplify/ui-react";
import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { ConnectCompo1440px, SwapCompo1440px } from "../ui-components";
import { getMainPoolList } from "../api/index.js";
import { useMediaQuery } from "react-responsive";

export default function PoolListCom1024px(props) {
  const { overrides, ...rest } = props;

  const [currentPagePoolList, setCurrentPagePoolList] = React.useState([]);
  const [pageIndex, setPageIndex] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const getPoolList = async () => {
    const { poolListData, resultTotalPages } = await getMainPoolList(pageIndex);
    setCurrentPagePoolList(poolListData);
    setTotalPages(resultTotalPages);
  };
  React.useEffect(() => {
    getPoolList();
  }, [pageIndex]);

  const paginationProps = usePagination({
    totalPages: totalPages,
    currentPage: pageIndex,
    siblingCount: 2,
  });

  const isDesktop = useMediaQuery({
    query: "(min-width:992px)",
  });

  return (
    <>
      {isDesktop ? (
        <Flex
          display="flex"
          gap="26px"
          direction="column"
          width="87vw"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "PoolListCom1024px")}
          {...rest}
        >
          <motion.div
            style={{
              width: "89vw",
              height: "unset",
              borderRadius: "33px",
              backgroundColor: "rgba(248,251,251,0.35)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backgroundImage:
                "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
            }}
            whileHover={{ borderRadius: "75px" }}
          >
            <Flex
              gap="21px"
              direction="column"
              width="unset"
              height="209px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              borderRadius="35px"
              padding="30px 51px 46px 51px"
              {...getOverrideProps(overrides, "Networks39913185")}
            >
              <Text
                fontFamily="Inter"
                fontSize="28px"
                fontWeight="700"
                lineHeight="33.8863639831543px"
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
                children="Networks List"
                {...getOverrideProps(overrides, "Networks List")}
              ></Text>
              <Flex
                gap="23px"
                direction="row"
                width="unset"
                height="78px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "NetWork List39913187")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
              </Flex>
            </Flex>
          </motion.div>

          <motion.div
            style={{
              width: "89vw",
              height: "unset",
              borderRadius: "33px",
              backgroundColor: "rgba(248,251,251,0.35)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backgroundImage:
                "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
            }}
            whileHover={{ borderRadius: "75px" }}
          >
            <Flex
              gap="21px"
              direction="column"
              width="unset"
              height="209px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              borderRadius="35px"
              padding="30px 51px 46px 51px"
              {...getOverrideProps(overrides, "Networks39913185")}
            >
              <Text
                fontFamily="Inter"
                fontSize="28px"
                fontWeight="700"
                lineHeight="33.8863639831543px"
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
                children="Dex List"
                {...getOverrideProps(overrides, "Networks List")}
              ></Text>
              <Flex
                gap="23px"
                direction="row"
                width="unset"
                height="78px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "NetWork List39913187")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="15px"
                  padding="10px 10px 10px 10px"
                  backgroundImage="linear-gradient(-7deg, rgba(255,255,255,1), rgba(255,255,255,0.15))"
                  {...getOverrideProps(overrides, "Frame 1939913188")}
                >
                  <Image
                    width="38px"
                    height="38px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    shrink="0"
                    position="relative"
                    borderRadius="20px"
                    padding="0px 0px 0px 0px"
                    objectFit="cover"
                    {...getOverrideProps(
                      overrides,
                      "unsplash:em1OiomfG3g39913189"
                    )}
                  ></Image>
                </Flex>
              </Flex>
            </Flex>
          </motion.div>

          <motion.div
            style={{
              width: "89vw",
              height: "unset",
              borderRadius: "15px",
              backgroundColor: "rgba(248,251,251,0.35)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backgroundImage:
                "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
            }}
            whileHover={{ borderRadius: "35px" }}
          >
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              borderRadius="13px"
              padding="6px 0px 6px 0px"
              {...getOverrideProps(overrides, "Top")}
            >
              <Flex
                gap="94px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 32px 0px 116px"
                {...getOverrideProps(overrides, "Frame 143")}
              >
                <Flex
                  gap="10px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="10px 10px 10px 10px"
                  {...getOverrideProps(overrides, "Frame 144")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="15px"
                    fontWeight="600"
                    lineHeight="18.15340805053711px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="LP List"
                    {...getOverrideProps(overrides, "LP List")}
                  ></Text>
                </Flex>
                <Flex
                  gap="15px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  grow="1"
                  shrink="1"
                  basis="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Frame 142")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="WALLET"
                    {...getOverrideProps(overrides, "WALLET")}
                  ></Text>
                  <Text
                    fontFamily="Inter"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="DEPOSITED"
                    {...getOverrideProps(overrides, "DEPOSITED")}
                  ></Text>
                  <Text
                    fontFamily="Inter"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="APY"
                    {...getOverrideProps(overrides, "APY")}
                  ></Text>
                  <Text
                    fontFamily="Inter"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="TVL"
                    {...getOverrideProps(overrides, "TVL")}
                  ></Text>
                  <Text
                    fontFamily="Inter"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="DAILY RATE"
                    {...getOverrideProps(overrides, "DAILY RATE")}
                  ></Text>
                  <Text
                    fontFamily="Inter"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="14.522727012634277px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="25px"
                    gap="unset"
                    alignItems="unset"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Action"
                    {...getOverrideProps(overrides, "Action")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
          </motion.div>

          <LayoutGroup>
            <motion.div
              layout
              initial={{ borderRadius: 25 }}
              transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              {currentPagePoolList.map((item, idx) => (
                <Flex
                  key={`lpList-1024-${idx}`}
                  gap="17px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                >
                  <ItemWrap
                    onClick={toggleOpen}
                    layout
                    transition={{
                      duration: 0.2,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    <motion.div
                      style={{
                        width: "89vw",
                        height: "unset",
                        borderRadius: "33px",
                        backgroundColor: "rgba(249, 250, 250, 0.75)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        backgroundImage:
                          "linear-gradient(-7deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15))",
                      }}
                      whileHover={{ borderRadius: "75px" }}
                    >
                      <Flex
                        gap="29px"
                        direction="row"
                        width="unset"
                        height="unset"
                        justifyContent="flex-start"
                        alignItems="center"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        borderRadius="18px"
                        padding="30px 18px 30px 18px"
                        {...getOverrideProps(overrides, "List")}
                      >
                        <Flex
                          gap="3px"
                          direction="column"
                          width="252px"
                          height="unset"
                          justifyContent="center"
                          alignItems="center"
                          shrink="0"
                          position="relative"
                          borderRadius="12px"
                          padding="14px 24px 14px 24px"
                          {...getOverrideProps(overrides, "Frame 11")}
                        >
                          <Flex
                            gap="-6px"
                            direction="row"
                            width="unset"
                            height="48px"
                            justifyContent="center"
                            alignItems="center"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            padding="5px 5px 5px 5px"
                            {...getOverrideProps(overrides, "PoolImg")}
                          >
                            <Image
                              src={item.mainNetLogo}
                              width="15px"
                              height="15px"
                              display="block"
                              gap="unset"
                              alignItems="unset"
                              justifyContent="unset"
                              shrink="0"
                              position="relative"
                              borderRadius="15px"
                              padding="0px 0px 0px 0px"
                              objectFit="cover"
                              {...getOverrideProps(
                                overrides,
                                "unsplash:AYOloXgqjzo"
                              )}
                            ></Image>
                            <Image
                              src={item.platformLogo}
                              width="38px"
                              height="38px"
                              display="block"
                              gap="unset"
                              alignItems="unset"
                              justifyContent="unset"
                              shrink="0"
                              position="relative"
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                              borderRadius="20px"
                              padding="0px 0px 0px 0px"
                              objectFit="cover"
                              {...getOverrideProps(
                                overrides,
                                "unsplash:em1OiomfG3g39913040"
                              )}
                            ></Image>
                          </Flex>
                          <Flex
                            gap="13px"
                            direction="column"
                            width="unset"
                            height="88px"
                            justifyContent="center"
                            alignItems="center"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            padding="10px 0px 10px 0px"
                            {...getOverrideProps(overrides, "LogoTitle")}
                          >
                            <Text
                              fontFamily="Inter"
                              fontSize="15px"
                              fontWeight="500"
                              lineHeight="18.15340805053711px"
                              textAlign="center"
                              display="block"
                              direction="column"
                              justifyContent="unset"
                              width="unset"
                              height="25px"
                              gap="unset"
                              alignItems="unset"
                              shrink="0"
                              alignSelf="stretch"
                              position="relative"
                              padding="0px 0px 0px 0px"
                              whiteSpace="pre-wrap"
                              children={item.name}
                              {...getOverrideProps(
                                overrides,
                                "Overnight Pulse Act ll"
                              )}
                            ></Text>
                            <Flex
                              gap="7px"
                              direction="row"
                              width="unset"
                              height="unset"
                              justifyContent="flex-start"
                              alignItems="flex-start"
                              grow="1"
                              shrink="1"
                              basis="0"
                              alignSelf="stretch"
                              position="relative"
                              padding="0px 0px 0px 0px"
                              {...getOverrideProps(overrides, "Frame 10")}
                            >
                              <Flex
                                gap="10px"
                                direction="column"
                                width="unset"
                                height="unset"
                                justifyContent="center"
                                alignItems="center"
                                grow="1"
                                shrink="1"
                                basis="0"
                                alignSelf="stretch"
                                position="relative"
                                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                                borderRadius="19px"
                                padding="10px 10px 10px 10px"
                                backgroundColor="rgba(234,0,50,0.55)"
                                {...getOverrideProps(overrides, "Frame 9")}
                              >
                                <Text
                                  fontFamily="Inter"
                                  fontSize="8px"
                                  fontWeight="500"
                                  color="rgba(239,239,239,1)"
                                  lineHeight="9.681818008422852px"
                                  textAlign="center"
                                  display="block"
                                  direction="column"
                                  justifyContent="unset"
                                  width="unset"
                                  height="15px"
                                  gap="unset"
                                  alignItems="unset"
                                  shrink="0"
                                  alignSelf="stretch"
                                  position="relative"
                                  padding="0px 0px 0px 0px"
                                  whiteSpace="pre-wrap"
                                  children="VELOCIMETER"
                                  {...getOverrideProps(
                                    overrides,
                                    "VELOCIMETER"
                                  )}
                                ></Text>
                              </Flex>
                              <Flex
                                gap="12px"
                                direction="row"
                                width="unset"
                                height="unset"
                                justifyContent="center"
                                alignItems="center"
                                grow="1"
                                shrink="1"
                                basis="0"
                                alignSelf="stretch"
                                position="relative"
                                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                                borderRadius="19px"
                                padding="10px 0px 10px 0px"
                                backgroundColor="rgba(255,226,0,0.35)"
                                {...getOverrideProps(overrides, "Frame 8")}
                              >
                                <Text
                                  fontFamily="Inter"
                                  fontSize="8px"
                                  fontWeight="500"
                                  lineHeight="9.681818008422852px"
                                  textAlign="center"
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
                                  children="STADER BOOST"
                                  {...getOverrideProps(
                                    overrides,
                                    "STADER BOOST"
                                  )}
                                ></Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="7px"
                          direction="row"
                          width="unset"
                          height="unset"
                          justifyContent="flex-start"
                          alignItems="center"
                          grow="1"
                          shrink="1"
                          basis="0"
                          position="relative"
                          padding="0px 0px 0px 0px"
                          {...getOverrideProps(overrides, "Frame 85")}
                        >
                          <Flex
                            gap="10px"
                            direction="row"
                            width="unset"
                            height="unset"
                            justifyContent="center"
                            alignItems="center"
                            grow="1"
                            shrink="1"
                            basis="0"
                            alignSelf="stretch"
                            position="relative"
                            borderRadius="11px"
                            padding="10px 10px 10px 10px"
                            {...getOverrideProps(overrides, "Frame 1539913049")}
                          >
                            <Text
                              fontFamily="Inter"
                              fontSize="12px"
                              fontWeight="500"
                              lineHeight="14.522727012634277px"
                              textAlign="center"
                              display="block"
                              direction="column"
                              justifyContent="unset"
                              width="unset"
                              height="17px"
                              gap="unset"
                              alignItems="unset"
                              grow="1"
                              shrink="1"
                              basis="0"
                              position="relative"
                              padding="0px 0px 0px 0px"
                              whiteSpace="pre-wrap"
                              children="wallet자리"
                              {...getOverrideProps(overrides, "039913050")}
                            ></Text>
                          </Flex>
                          <Flex
                            gap="10px"
                            direction="row"
                            width="unset"
                            height="unset"
                            justifyContent="center"
                            alignItems="center"
                            grow="1"
                            shrink="1"
                            basis="0"
                            alignSelf="stretch"
                            position="relative"
                            borderRadius="11px"
                            padding="10px 10px 10px 10px"
                            {...getOverrideProps(overrides, "Frame 18")}
                          >
                            <Text
                              fontFamily="Inter"
                              fontSize="12px"
                              fontWeight="500"
                              lineHeight="14.522727012634277px"
                              textAlign="center"
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
                              children="deposit자리"
                              {...getOverrideProps(overrides, "039913052")}
                            ></Text>
                          </Flex>
                          <Flex
                            gap="10px"
                            direction="row"
                            width="unset"
                            height="unset"
                            justifyContent="center"
                            alignItems="center"
                            grow="1"
                            shrink="1"
                            basis="0"
                            alignSelf="stretch"
                            position="relative"
                            borderRadius="11px"
                            padding="10px 10px 10px 10px"
                            {...getOverrideProps(overrides, "Frame 1939913053")}
                          >
                            <Text
                              fontFamily="Inter"
                              fontSize="12px"
                              fontWeight="500"
                              lineHeight="14.522727012634277px"
                              textAlign="center"
                              display="block"
                              direction="column"
                              justifyContent="unset"
                              width="unset"
                              height="17px"
                              gap="unset"
                              alignItems="unset"
                              grow="1"
                              shrink="1"
                              basis="0"
                              position="relative"
                              padding="0px 0px 0px 0px"
                              whiteSpace="pre-wrap"
                              children={`${
                                Math.round(item?.apy * 10000) / 10000
                              } %`}
                              {...getOverrideProps(overrides, "99.99%")}
                            ></Text>
                          </Flex>
                          <Flex
                            gap="10px"
                            direction="row"
                            width="unset"
                            height="unset"
                            justifyContent="center"
                            alignItems="center"
                            grow="1"
                            shrink="1"
                            basis="0"
                            alignSelf="stretch"
                            position="relative"
                            borderRadius="11px"
                            padding="10px 10px 10px 10px"
                            {...getOverrideProps(overrides, "Frame 16")}
                          >
                            <Text
                              fontFamily="Inter"
                              fontSize="9px"
                              fontWeight="500"
                              lineHeight="10.892045021057129px"
                              textAlign="center"
                              display="block"
                              direction="column"
                              justifyContent="unset"
                              width="unset"
                              height="17px"
                              gap="unset"
                              alignItems="unset"
                              grow="1"
                              shrink="1"
                              basis="0"
                              position="relative"
                              padding="0px 0px 0px 0px"
                              whiteSpace="pre-wrap"
                              children={`$${item.tvl}`}
                              {...getOverrideProps(
                                overrides,
                                "$999,99939913056"
                              )}
                            ></Text>
                          </Flex>
                          <Flex
                            gap="10px"
                            direction="row"
                            width="unset"
                            height="unset"
                            justifyContent="center"
                            alignItems="center"
                            grow="1"
                            shrink="1"
                            basis="0"
                            alignSelf="stretch"
                            position="relative"
                            borderRadius="11px"
                            padding="10px 10px 10px 10px"
                            {...getOverrideProps(overrides, "Frame 2039913057")}
                          >
                            <Text
                              fontFamily="Inter"
                              fontSize="9px"
                              fontWeight="500"
                              lineHeight="10.892045021057129px"
                              textAlign="center"
                              display="block"
                              direction="column"
                              justifyContent="unset"
                              width="unset"
                              height="17px"
                              gap="unset"
                              alignItems="unset"
                              grow="1"
                              shrink="1"
                              basis="0"
                              position="relative"
                              padding="0px 0px 0px 0px"
                              whiteSpace="pre-wrap"
                              children={`$${
                                item.dailyTvlRate == null
                                  ? 0
                                  : Math.round(item.dailyTvlRate * 10000) /
                                    10000
                              }`}
                              {...getOverrideProps(
                                overrides,
                                "$999,99939913058"
                              )}
                            ></Text>
                          </Flex>
                          <Flex
                            gap="10px"
                            direction="row"
                            width="unset"
                            height="unset"
                            justifyContent="center"
                            alignItems="center"
                            grow="1"
                            shrink="1"
                            basis="0"
                            alignSelf="stretch"
                            position="relative"
                            borderRadius="11px"
                            padding="10px 10px 10px 10px"
                            {...getOverrideProps(overrides, "Frame 17")}
                          >
                            <Text
                              fontFamily="Inter"
                              fontSize="9px"
                              fontWeight="500"
                              lineHeight="10.892045021057129px"
                              textAlign="center"
                              display="block"
                              direction="column"
                              justifyContent="unset"
                              width="unset"
                              height="17px"
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
                    </motion.div>
                  </ItemWrap>
                  <AnimatePresence>
                    {isOpen && (
                      <SubWrap>
                        <motion.div
                          layout
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.43, 0.13, 0.23, 0.96],
                          }}
                        >
                          <SwapCompo1440px />
                        </motion.div>
                      </SubWrap>
                    )}
                  </AnimatePresence>
                </Flex>
              ))}
            </motion.div>
          </LayoutGroup>
          <Flex width="80vw" justifyContent="center" padding="30px 0px 0px 0px">
            <Pagination
              {...paginationProps}
              onChange={pageNum => {
                setPageIndex(pageNum);
              }}
              onNext={() => {
                setPageIndex(pageIndex + 1);
              }}
              onPrevious={() => {
                setPageIndex(pageIndex - 1);
              }}
            />
          </Flex>
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
}
const ItemWrap = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin-top: 38px;
`;

const SubWrap = styled(motion.div)`
  font-size: 15px;
  display: flex;
  :last-child {
    border-radius: 0 0 20px 20px;
  }
`;
