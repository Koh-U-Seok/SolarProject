/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import styled from "styled-components";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, Pagination } from "@aws-amplify/ui-react";

import Poolitem768px from "../components/Pool/Poolitem768px";
import {
  Netlist768px,
  Dexlist768px,
} from "../components/netdexlist/Netdexlist";
import { motion, LayoutGroup } from "framer-motion";

export default function PooListCom768px(props) {
  const { overrides, ...rest } = props;

  return (
    <Flex
      display="flex"
      gap="52px"
      direction="column"
      width="87vw"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PooListCom768px")}
      {...rest}
    >
      <Flex
        gap="25px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PoolList")}
      >
        <motion.div
          style={{
            width: "89vw",
            height: "unset",
            borderRadius: "33px",
            backgroundColor: "rgba(248,251,251,0.35)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            backgroundImage:
              "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
          }}
          width={{ base: "80vw", medium: "87vw" }}
          whileHover={{
            borderRadius: "75px",
            backgroundColor: "rgba(247,239,227,0.75)",
          }}
        >
          <Flex
            gap="23px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="35px"
            padding="28px 38px 28px 38px"
            {...getOverrideProps(overrides, "Networks List39563128")}
          >
            <Text
              fontFamily="ffProLight"
              fontSize="24px"
              fontWeight="700"
              lineHeight="29.045454025268555px"
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
              children="MainNet"
              {...getOverrideProps(overrides, "Networks List39563127")}
            ></Text>
            <Flex
              gap="18px"
              direction="column"
              width="unset"
              height="178px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Networks39422850")}
            >
              <Flex
                gap="30px"
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
                {...getOverrideProps(overrides, "Frame 3839412790")}
              >
                {props?.mainNetList?.map((item, idx) => (
                  <Netlist768px
                    key={`Netlist768px-1${idx}`}
                    item={item}
                    filter={props?.filter}
                    setFilter={props?.setFilter}
                    setCurrentPagePoolList={props?.setCurrentPagePoolList}
                    setTotalPages={props?.setTotalPages}
                    pageIndex={props?.pageIndex}
                  />
                ))}
              </Flex>
              <Flex
                gap="30px"
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
                {...getOverrideProps(overrides, "Frame 3839412790")}
              >
                {props?.mainNetList1?.map((item, idx) => (
                  <Netlist768px
                    key={`Netlist768px-2${idx}`}
                    item={item}
                    pageIndex={props?.pageIndex}
                    setCurrentPagePoolList={props?.setCurrentPagePoolList}
                    setTotalPages={props?.setTotalPages}
                    setFilter={props?.setFilter}
                    filter={props?.filter}
                  />
                ))}
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
              "linear-gradient(-7deg, rgba(252,253,254,1), rgba(246,247,248,0.15))",
          }}
          whileHover={{
            borderRadius: "75px",
            backgroundColor: "rgba(247,239,227,0.75)",
          }}
        >
          <Flex
            gap="23px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="35px"
            padding="28px 38px 28px 38px"
            {...getOverrideProps(overrides, "Networks List39563128")}
          >
            <Text
              fontFamily="ffProLight"
              fontSize="24px"
              fontWeight="700"
              lineHeight="29.045454025268555px"
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
              children="Dex"
              {...getOverrideProps(overrides, "Networks List39563127")}
            ></Text>
            <Flex
              gap="18px"
              direction="column"
              width="unset"
              height="178px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Networks39422850")}
            >
              <Flex
                gap="30px"
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
                {...getOverrideProps(overrides, "Frame 3839412790")}
              >
                {props?.platformList?.map((item, idx) => (
                  <Dexlist768px
                    key={`platformList768px-1${idx}`}
                    item={item}
                    setCurrentPagePoolList={props?.setCurrentPagePoolList}
                    setTotalPages={props?.setTotalPages}
                    pageIndex={props?.pageIndex}
                    filter={props?.filter}
                  />
                ))}
              </Flex>
              <Flex
                gap="30px"
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
                {...getOverrideProps(overrides, "Frame 3839412790")}
              >
                {props?.platformList1?.map((item, idx) => (
                  <Dexlist768px
                    key={`platformList768px-2${idx}`}
                    item={item}
                    setCurrentPagePoolList={props?.setCurrentPagePoolList}
                    filter={props?.filter}
                  />
                ))}
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
            {props?.currentPagePoolList?.map((item, idx) => (
              <Poolitem768px
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
                key={`PoolList768px-${idx}`}
                item={item}
                last={
                  idx == props?.currentPagePoolList.length - 1 ? true : false
                }
              />
            ))}
          </motion.div>
        </LayoutGroup>
        <Flex width="80vw" justifyContent="center" padding="30px 0px 0px 0px">
          <Pagination
            {...props?.paginationProps}
            onChange={(pageNum) => {
              setPageIndex(pageNum);
            }}
            onNext={() => {
              setPageIndex(props?.pageIndex + 1);
            }}
            onPrevious={() => {
              setPageIndex(props?.pageIndex - 1);
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
