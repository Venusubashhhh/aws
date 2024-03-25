import React from "react";
import styles from "./home.module.scss";
import ButtonComponent from "../../../components/button/Button";
import RadioButtonsGroup from "../../../components/Radio";
import { RadioGroup } from "@mui/material";
import { Radio } from "@mui/material";
import { useRouter } from "next/router";
import FormLabel from "@mui/material/FormLabel";
import Link from "next/link";

function Home() {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const router = useRouter();
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  function handleRoute()
  {
         if(selectedValue=='a')
         {
          router.push('/outlined')
         }
         else if(selectedValue=='b')
         {
          router.push('/filled')
         }
         else{
          router.push('/standard')
         }
  }
  return (
    <div className={styles.homeWrapper}>
      <div>
        <div className={styles.cardWrapper}>
          <div>
            <div
              className={
                selectedValue == "a" ? styles.selectedCard : styles.card
              }
            >
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                style={{ marginTop: "-5px"}}
              />
              <FormLabel  id="demo-customized-radios" className={           selectedValue == "a" ? styles.label :styles.nolabel}>
                Jurisdiction Schools
              </FormLabel>

              <div className={styles.contentWrap}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
            <h1 className={styles.h1}>Outlined</h1>
          </div>
          <div>
            <div
              className={
                selectedValue == "b" ? styles.selectedCard : styles.card
              }
            >
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
                style={{ marginTop: "-5px", }}
              />
              <FormLabel  id="demo-customized-radios" className={           selectedValue == "b" ? styles.label :styles.nolabel}>
              Catholic Schools
              </FormLabel>
              <div className={styles.contentWrap}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
            <h1 className={styles.h1}>Filled</h1>
          </div>
          <div>
            <div
              className={
                selectedValue == "c" ? styles.selectedCard : styles.card
              }
            >
              <Radio
                checked={selectedValue === "c"}
                onChange={handleChange}
                value="c"
                name="radio-buttons"
                inputProps={{ "aria-label": "C" }}
                style={{ marginTop: "-5px" }}
              />
              <FormLabel id="demo-customized-radios" className={           selectedValue == "c" ? styles.label :styles.nolabel}>
               Independent Schools
              </FormLabel>

              <div className={styles.contentWrap}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
            <h1 className={styles.h1}>Standard</h1>
          </div>
        </div>
        <div className={styles.buttonWrap} onClick={handleRoute}>
     
            <ButtonComponent/>
       
        </div>
      </div>
    </div>
  );
}

export default Home;
