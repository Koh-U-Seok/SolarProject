import styled from "styled-components";
import {
  AddLiquidityBottom320px,
  AddLiquidityBottom768px,
  AddLiquidityTop320px,
  AddLiquidityTop768px,
} from "../../ui-components";
import { useState } from "react";
import { Flex } from "@aws-amplify/ui-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const LiquidComponent = ({ oracleId, balance }) => {
  const props = oracleId;
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const isDesktop = useMediaQuery({
    query: "(min-width:1280px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width:1279px)",
  });

  return (
    <>
      {isDesktop ? (
        <Addliqud>
          <Flex
            direction={{
              medium: "column",
              large: "row",
            }}
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
                  height: "unset",
                  borderRadius: "35px",
                  backgroundColor: "rgba(249,249,249,1)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                whileHover={{
                  borderRadius: "55px",
                  scale: 0.99,
                  backgroundColor: "rgba(249,249,249,0.55)",
                  boxShadow: "10px 10px 20px rgba(0, 20, 0, 0.25)",
                }}
              >
                <AddLiquidityTop768px oracleiddata={props} balance={balance} />
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
                    <AddLiquidityBottom768px
                      style={{ marginTop: "75px" }}
                      oracleiddata={props}
                      balance={balance}
                    />
                  </motion.div>
                </SubWrap>
              )}
            </AnimatePresence>
          </Flex>
        </Addliqud>
      ) : (
        <></>
      )}
      {isMobile ? (
        <>
          <Addliqud>
            <Flex
              direction={{
                base: "column",
                small: "column",
                medium: "row",
              }}
            >
              <ItemWrap
                layout
                transition={{
                  duration: 0.2,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              >
                <motion.div
                  onClick={toggleOpen}
                  style={{
                    height: "unset",
                    borderRadius: "35px",
                    backgroundColor: "rgba(249,249,249,1)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  whileHover={{
                    borderRadius: "55px",
                    scale: 0.99,
                    backgroundColor: "rgba(249,249,249,0.55)",
                    boxShadow: "10px 10px 20px rgba(0, 20, 0, 0.25)",
                  }}
                >
                  <AddLiquidityTop320px
                    oracleiddata={props}
                    balance={balance}
                  />
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
                      style={{
                        height: "unset",
                        borderRadius: "35px",
                        backgroundColor: "rgba(249,249,249,1)",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      }}
                      whileHover={{
                        borderRadius: "55px",
                        scale: 0.99,
                        backgroundColor: "rgba(249,249,249,0.55)",
                        boxShadow: "10px 10px 20px rgba(0, 20, 0, 0.25)",
                      }}
                    >
                      <AddLiquidityBottom320px
                        style={{ marginTop: "75px" }}
                        oracleiddata={props}
                        balance={balance}
                      />
                    </motion.div>
                  </SubWrap>
                )}
              </AnimatePresence>
            </Flex>
          </Addliqud>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default LiquidComponent;

const Addliqud = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  margin-top: 30px;
`;

const ItemWrap = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
