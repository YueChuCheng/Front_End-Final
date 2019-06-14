<template>
  <div class="hello">
    <Nav/>
    <article>
      <div class="menuheader_container">
        <h4>菜單</h4>
        <h4>Menu</h4>
        <hr>
      </div>
      <section>
        <div class="order_container">
          <div class="orderheader"></div>
          <div class="food_container" v-for="item,index in order">
            <ul>
              <li>
                <button v-on:click="Delete(index)">Delete</button>
                <p class="foodinfo_p">{{ item.name }}</p>
                <p class="foodinfo_p">{{ item.count }}</p>
                <p class="foodinfo_p">{{ item.totalPrice }}</p>
              </li>
            </ul>
          </div>
        </div>
        <p>共計：NT$ {{ totalPrice }}</p>
        <div>
          <form>
            外送地址：
            <input type="text" placeholder="請輸入外送地址" v-model="addressText" required>
            訂購人：
            <input type="text" placeholder="請輸入姓名" required v-model="nameText">
            手機：
            <input
              type="tel"
              placeholder="請輸入手機號碼"
              maxlength="10"
              required
              v-model="TELText"
            >
            預計送達時間:
            <select name="YourLocation" required v-model="timeOne">
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
            </select>時
            <select name="YourLocation" required v-model="timeTwo">
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
            </select>～
            <select name="YourLocation" required v-model="timeThree">
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
            </select>時
            <select name="YourLocation" required v-model="timeFour">
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
            </select>分
            備註：
            <textarea rows="2" cols="50" v-model="message"></textarea>
          </form>
        </div>
        <button v-on:click="SendOrder" type="submit">送出訂單</button>
      </section>
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
h1,
h2 {
  font-weight: normal;
}
h4 {
  font-size: 3vw;
  font-weight: 300;
}
h4:nth-child(2) {
  font-size: 2vw;
  font-weight: 400;
  text-align: center;
  margin-top: 4px;
}
p {
    font-size: 1.75vw;
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
  border-top: 0.2vw solid #262626;
  width: 18vw;
  margin-top: 0.5vw;
}
form{
  display: grid
}
article {
  width: 100%;
  display: grid;
  justify-content: center;
  background-color: #f8f8f8;
  padding-top: 90px;
  padding-bottom: 8vw;
  grid-template-columns: 100%;
}
section{
  display: grid;
  justify-content: center;
}
.menuheader_container {
  display: grid;
  justify-content: center;
  margin-bottom: 1.5vw;
  justify-items: center;
}
.order_container {
  width: 80vw;
  padding-bottom: 5vw;
  display: grid;
  justify-content: center;
  grid-template-columns:100%;
  grid-template-rows: 5vw;
}
.orderheader{
  z-index: 1;
  background-color: #219e91;
  border-radius: 30px 30px 0px 0px;
}

.food_container{
  z-index: 0;
  border: 1px solid #000000;
  display: grid;
  width: 80vw;
  padding:1vw 2.5vw;
  background-color: #ffffff;
  box-shadow: 0.1px 0.1px 7px 0.5px #eeeeee;
}
.food_container ul li{
  border: 1px solid #000000;
  display: grid;
  grid-template-columns: 5vw auto 15vw 15vw;
  grid-template-rows: 5vw;
  background-color: #ffffff;
  align-items: center;
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
@media screen and (max-width: 768px) and (min-width: 481px) {
  h4 {
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
  /* article */
  .menuheader_container {
    margin-bottom: 4.5vw;
  }
  .mainbtn {
    margin-top: 3vw;
    font-size: 1em;
    height: 35px;
    width: 6em;
    border-radius: 60px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}

/* 480px */
@media screen and (max-width: 480px) {
  h4 {
    font-size: 1.4em;
  }
  h4:nth-child(2) {
    display: none;
  }
  hr {
    border-top: 1px solid #262626;
    width: 18vw;
    margin-top: 10px;
  }
  /* article */
  .menuheader_container {
    margin-bottom: 4.5vw;
  }
  .mainbtn {
    font-size: 1em;
    width: 100px;
    height: 35px;
    margin-top: 30px;
  }
}
</style>



