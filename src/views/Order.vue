<template>
  <div class="hello">
    <Nav/>
    <article>
      <div class="menuheader_container">
        <h4>訂單確認</h4>
        <h4>Check Order</h4>
        <hr>
      </div>
      <section>
        <div class="order_container">
          <div class="orderheader">
            <p class="foodinfo_p">餐點</p>
            <div class="foodsmallinfo">
              <p class="foodinfo_p">數量</p>
              <p class="foodinfo_p special">小計</p>
            </div>
          </div>
          <div class="food_container" v-for="item,index in order">
            <ul>
              <li>
                <button v-on:click="Delete(index)" class="deletebtn">
                  <img src="../assets/icon/middelete.png" class="img_delete">
                </button>
                <p class="foodinfo_p">{{ item.name }}</p>
                <div class="foodsmallinfo">
                  <p class="foodinfo_p">{{ item.count }}</p>
                  <p class="foodinfo_p">NT$ {{ item.totalPrice }}</p>
                </div>
              </li>
            </ul>
          </div>
          <hr>
          <div class="totalpricebox">
            <p>總付款金額</p>
            <p>NT$ {{ totalPrice }}</p>
          </div>
        </div>
        <section>
          <div class="menuheader_container">
            <div class="font_bg">填寫訂購人資料</div>
            <h5 class="menuheader2_h5">填寫訂購人資料</h5>
            <hr class="menuheader2_hr">
          </div>
          <div>
            <form>
              <div class="formtext">
                <p>外送地址</p>
                <p>訂購人</p>
                <p>手機</p>
                <p>預計送達時間</p>
                <p>備註</p>
              </div>
              <div class="input_container">
                <input type="text" placeholder="請輸入外送地址" v-model="addressText" required>
                <input type="text" placeholder="請輸入姓名" required v-model="nameText">
                <input type="tel" placeholder="請輸入手機號碼" maxlength="10" required v-model="TELText">
                <div class="time_container">
                  <select name="timeselect" required v-model="timeOne">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                  </select> 時
                  <select name="timeselect" required v-model="timeTwo">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    <option>32</option>
                    <option>33</option>
                    <option>34</option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                    <option>43</option>
                    <option>44</option>
                    <option>45</option>
                    <option>46</option>
                    <option>47</option>
                    <option>48</option>
                    <option>49</option>
                    <option>50</option>
                    <option>51</option>
                    <option>52</option>
                    <option>53</option>
                    <option>54</option>
                    <option>55</option>
                    <option>56</option>
                    <option>57</option>
                    <option>58</option>
                    <option>59</option>
                    <option>60</option>
                  </select> 分 ～
                  <select name="timeselect" required v-model="timeThree">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                  </select> 時
                  <select name="timeselect" required v-model="timeFour">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    <option>32</option>
                    <option>33</option>
                    <option>34</option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                    <option>43</option>
                    <option>44</option>
                    <option>45</option>
                    <option>46</option>
                    <option>47</option>
                    <option>48</option>
                    <option>49</option>
                    <option>50</option>
                    <option>51</option>
                    <option>52</option>
                    <option>53</option>
                    <option>54</option>
                    <option>55</option>
                    <option>56</option>
                    <option>57</option>
                    <option>58</option>
                    <option>59</option>
                    <option>60</option>
                  </select> 分
                </div>
                <textarea rows="2" cols="50" v-model="message"></textarea>
              </div>
            </form>
          </div>
        </section>
        <button class="mainbtn" v-on:click="SendOrder" type="submit">送出訂單</button>
      </section>
      <img src="../assets/draw_new (2).png" alt class="img_draw">
    </article>
    <Footer/>
  </div>
</template>

<!-- <button type="submit">送出訂單</button>   -->
<script>
import db from "../firebase/index";
import { mapState } from "vuex";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default {
  name: "Order",
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      nameText: "",
      addressText: "",
      TELText: "",
      timeOne: "",
      timeTwo: "",
      timeThree: "",
      timeFour: "",
      message: ""
    };
  },
  computed: mapState({
    totalPrice: state => state.totalPrice,
    order: state => state.order,
    clickID: state => state.clickID
  }),
  firestore() {
    return {
      // Collection
      docInfoRef: firebase
        .firestore()
        .collection("Restaurant")
        .doc("Info"),
      colOrderRef: firebase
        .firestore()
        .collection("Restaurant")
        .doc("Info")
        .collection("Order")
      // docInfoRef: firebase.firestore().collection("test").doc(this.$store.state.clickID),
      // colOrderRef: firebase
      //   .firestore()
      //   .collection("test")
      //   .doc(this.$store.state.clickID)
      //   .collection("Order")
    };
  },
  created() {
    console.log(this.$store.state.clickID);
  },
  methods: {
    Delete: function(index) {
      this.$store.state.totalPrice -= this.$store.state.order[index].totalPrice;
      this.$store.state.order.splice(index, 1);
    },
    SendOrder: async function(event) {
      //取得訂單筆數
      let doc = await this.$firestore.docInfoRef.get();
      let i = 0;
      let j = 0;
      let orderNumber = [];
      if (doc.exists) {
        i = doc.data().TotalOrderCount;
        i++;
        j = doc.data().OrderCount;
        j++;
        orderNumber = doc.data().OrderNumber;
        orderNumber.push(i);
      }
      let setOrderCount = await this.$firestore.docInfoRef.set(
        {
          TotalOrderCount: i,
          OrderCount: j,
          OrderNumber: orderNumber
        },
        { merge: true }
      );
      //寫入訂單資料
      this.$store.state.order.forEach(async (item, index) => {
        console.log(index);
        let setOrder = await this.$firestore.colOrderRef
          .doc("Order" + i)
          .collection("Food")
          .doc("Food" + (index + 1))
          .set({
            Name: item.name,
            Count: item.count
          });
      });
      //寫入食物數量
      let setFoodCount = await this.$firestore.colOrderRef
        .doc("Order" + i)
        .set({
          FoodCount: this.$store.state.order.length
        });
      //寫入訂購人資料
      let setTotalPrice = await this.$firestore.colOrderRef
        .doc("Order" + i)
        .collection("Info")
        .doc("Info")
        .set({
          TotalPrice: this.$store.state.totalPrice,
          Name: this.nameText,
          Address: this.addressText,
          TEL: this.TELText,
          Time:
            this.timeOne +
            "時" +
            this.timeTwo +
            "分～" +
            this.timeThree +
            "時" +
            this.timeFour +
            "分",
          Message: this.message
        });
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  font-family: "Noto Sans TC", sans-serif;
  margin: 0;
  padding: 0;
}
/* nav */
.main {
  padding: 14px 10px;
  background-color: #262626;
}
h1,
h2 {
  font-weight: normal;
}
h4,
h5 {
  font-size: 3vw;
  font-weight: 400;
}
h4:nth-child(2) {
  font-size: 2vw;
  font-weight: 400;
  text-align: center;
  margin-top: 4px;
}
p {
  font-size: 2vw;
  font-weight: 300;
  margin-bottom: 0.1vw;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
hr {
  border: none;
  border-top: 0.15vw solid #262626;
  width: 18vw;
  margin-top: 0.5vw;
}
form {
  display: grid;
}
article {
  width: 100%;
  display: grid;
  justify-content: center;
  background-color: #f8f8f8;
  padding-top: 10vw;
  padding-bottom: 3vw;
  grid-template-columns: 100%;
}
section {
  display: grid;
  justify-content: center;
  grid-template-columns: 80vw;
}
.menuheader_container {
  display: grid;
  justify-content: center;
  margin-bottom: 4vw;
  justify-items: center;
}
.order_container {
  width: 80vw;
  padding-bottom: 5vw;
  display: grid;
  justify-content: center;
  grid-template-columns: 100%;
  grid-template-rows: 5vw;
}
.orderheader {
  z-index: 1;
  background-color: #219e91;
  color: #ffffff;
  border-radius: 25px 25px 0px 0px;
  display: grid;
  grid-template-columns: auto 20vw;
  align-items: center;
  grid-column-gap: 38vw;
  justify-content: start;
  padding-left: 13vw;
}
.food_container {
  z-index: 0;
  display: grid;
  width: 80vw;
  padding: 1vw 2.5vw;
  background-color: #ffffff;
  box-shadow: 0.1px -1px 5px 0.5px #e6e6e6;
}
.food_container ul li {
  display: grid;
  grid-template-columns: 5vw auto 20vw;
  grid-template-rows: 5vw;
  background-color: #ffffff;
  align-items: center;
  grid-column-gap: 5vw;
}
.deletebtn {
  background-color: #ff794a;
  border: #ff794a;
  border-radius: 50px;
  width: 4.5vw;
  height: 4.5vw;
}
.img_delete {
  height: 2vw;
  margin-top: -2px;
}
.foodsmallinfo p {
  text-align: start;
}
.foodsmallinfo {
  display: grid;
  grid-template-columns: 5vw 10vw;
  grid-column-gap: 5vw;
}
.special {
  margin-left: 3vw;
}
.order_container hr {
  margin: 10px 0 2vw;
  width: 100%;
  border-top: 0.15vw solid #686868;
}
.totalpricebox {
  margin: 0 5.75vw;
  display: grid;
  grid-template-columns: auto 12.5vw;
  text-align: end;
}
.totalpricebox p:nth-child(2) {
  color: #219e91;
  font-weight: 500;
}
.menuheader2_h5 {
  z-index: 1;
}
.menuheader2_hr {
  z-index: 1;
  border-top: 1.5px solid #262626;
  width: 21vw;
}
.font_bg {
  width: 22.5vw;
  border-radius: 50px;
  background-color: #219e91;
  height: 3vw;
  margin-top: 2%;
  margin-left: 31.5%;
  position: absolute;
  color: rgba(0, 0, 0, 0);
  z-index: 0;
}
form {
  background-color: #ffffff;
  padding: 5vw;
  box-shadow: 0.1px 0.1px 7px 0.5px #e6e6e6;
  display: grid;
  grid-template-columns: 13vw auto;
  font-size: 1.5vw;
  margin-bottom: 1.5vw;
}
.input_container {
  margin-left: 2vw;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, 4.9vw) 5vw auto;
}
input {
  border: #7c7c7c 1px solid;
  border-radius: 7.5px;
  height: 3.5vw;
  padding-left: 1vw;
}
textarea {
  border: #7c7c7c 1px solid;
  border-radius: 7.5px;
  height: 8vw;
  padding-left: 1vw;
  margin-top: 0.3vw;
}
select {
  border: #7c7c7c 1px solid;
  background-color: #ffffff;
  border-radius: 7.5px;
  height: 3vw;
  padding-left: 1vw;
  color: #262626;
  margin-top: 0.3vw;
}
option {
  color: #262626;
  background-color: #ffffff;
}
.formtext {
  margin-top: 0.1%;
  display: grid;
  text-align: end;
  grid-template-rows: repeat(3, 4.9vw) 5vw auto;
}
.mainbtn {
  margin-top: 3vw;
  background-color: #ff794a;
  border: #ff794a;
  text-align: center;
  color: #ffffff;
  font-weight: 200;
  font-size: 2vw;
  width: 13vw;
  height: 4.5vw;
  border-radius: 60px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.mainbtn:active {
  background-color: #c95932;
}
.img_draw {
  width: 18vw;
  margin-top: 5vw;
  margin-left: 77.5vw;
}

@media screen and (max-width: 768px) {
  h4,
  h5 {
    font-size: 4vw;
  }
  h4:nth-child(2) {
    font-size: 2.75vw;
  }
  hr {
    border-top: 1.5px solid #262626;
    width: 25vw;
    margin-top: 1vw;
  }
  article {
    padding-top: 15vw;
  }
  .menuheader2_hr {
    width: 30vw;
  }
  .font_bg {
    width: 31vw;
    border-radius: 50px;
    background-color: #219e91;
    height: 4vw;
    margin-top: 2.5%;
    margin-left: 28%;
  }
  p {
    font-size: 2.5vw;
  }
  /* article */
  .menuheader_container {
    margin-bottom: 4.5vw;
  }
  .orderheader {
    grid-template-columns: auto 20vw;
    grid-column-gap: 36vw;
    padding-left: 13.5vw;
  }
  .foodsmallinfo {
    grid-template-columns: 5vw 15vw;
    grid-column-gap: 4vw;
  }
  .img_delete {
    margin-top: -0.5vw;
  }
  .totalpricebox {
    margin: 0 5vw;
    grid-template-columns: auto 15vw;
  }
  form {
    grid-template-columns: 15vw auto;
  }
  .formtext {
    margin-top: 0.1%;
    display: grid;
    text-align: end;
    grid-template-rows: repeat(3, 4.8vw) 5vw auto;
  }
  .mainbtn {
    margin-top: 20px;
    height: 5vw;
    width: 6em;
    border-radius: 60px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}

/* 480px */
@media screen and (max-width: 480px) {
  h4,h5 {
    font-size: 1.4em;
  }
  h4:nth-child(2) {
    display: none;
  }
  hr {
    border-top: 1px solid #262626;
    width: 120px;
    margin-top: 10px;
  }
  p {
    font-size: 0.9em;
    font-weight: 200;
  }
  article {
    padding-top: 20vw;
  }
   .menuheader2_hr {
    width: 200px;
  }
  .font_bg {
    display: none;
  }
  /* article */
  .menuheader_container {
    margin-bottom: 4.5vw;
  }
  section {
    grid-template-columns: 75vw;
  }
  .order_container {
    width: 75vw;
    grid-template-rows: 9vw;
  }
  .orderheader {
    border-radius: 20px 20px 0px 0px;
    grid-template-columns: auto 10vw;
    grid-column-gap: 21.5vw;
    padding-left: 14vw;
  }
  .orderheader p{
    font-size:3.5vw
  }
  .food_container {
    width: 75vw;
    padding: 5% 7.5px;
  }
  .food_container .foodsmallinfo .foodinfo_p{
    font-size:3vw
  }
  .food_container ul li {
    grid-template-columns: 5vw 26vw auto;
    grid-template-rows: 5vw;
    grid-column-gap: 5vw;
  }
  .deletebtn {
    border-radius: 100%;
    width: 7.5vw;
    height:7.5vw;
  }
  .img_delete {
    height: 3vw;
    margin-top: -4px;
  }
  .special {
    margin-left: 17.5px;
  }
  .foodsmallinfo{
    grid-template-columns: 8vw 60px;
    grid-column-gap: 0px;
  }
  .totalpricebox {
    margin: 0 2vw 0 auto;
    grid-template-columns: 95px 100px;
    text-align: center;
  }
  form{
    position: relative;
    grid-template-columns: auto;
    padding: 25px;
  }
  
  .formtext {
    position: absolute;
    margin: 20px 25px;
    text-align: start;
    grid-template-rows: repeat(3, 4.9vw) 5vw auto;
    grid-row-gap:38px;
    z-index: 0;
  }
  .formtext>p{
    font-size:17.5px;
    font-weight:300;
  }
  .input_container {
    margin-left:0;
    grid-template-rows: repeat(4, 5vw) auto;
    grid-row-gap: 37.5px;
    z-index: 1;
  }
  input {
    height: 27.5px;
    margin-top:7.5%;
  }
  select {
    border-radius:5px;
    height: 22.5px;
    margin-top: 5vw;
  }
  textarea {
    height: 60px;
    margin-top: 27.25px;
  }
  .mainbtn {
    font-size: 1em;
    width: 100px;
    height: 35px;
    margin-top: 30px;
  }
  .img_draw {
    display: none;
  }
}

@media screen and (max-width: 400px) {
  .formtext {
    grid-row-gap:37px;
  }
  .formtext>p:nth-child(5){
    margin-top:14px
  }
  input {
    height: 27.5px;
    margin-top:7.5%;
  }
  select {
    border-radius:5px;
    height: 22.5px;
    margin-top: 5vw;
  }
  textarea {
    margin-top: 30px;
  }
}
</style>



