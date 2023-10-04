<template>
  <div>
    <h2>Experience</h2>
    <div class="timeline">
      <div class="year-container">
        <span class="year">2023</span>
      </div>
      <ul>
        <br><br><br>
        <li>
          <a href="https://med-tu.org/techno" target="_blank">
            <div class="Subject">
              <h3>Faculty of Medicine, Thammasat University</h3>
              <h5>Software development of Department Education Technology</h5>
              <div class="grey">June 2020 - Present</div>
            </div>
            <div class="content">

              <br>
              <div>
                <strong>Employee payroll management,</strong>
                Successful by using HTML CSS BOOTSTRAP JQUERY AJAX for FRONTEND and PHP PDO for BACKEND
                development.
                <br><br>
                <div class="b-margin">
                  - Set permission of user.
                </div>
                <div class="b-margin">
                  - CRUD system for employees details.
                </div>
                <div class="b-margin">
                  - Feature import and export csv or excel file.
                </div>
                <div class="b-margin">
                  - Generate payroll slip as pdf file.
                </div>
                <div class="b-margin">
                  - Information search system such as search by identity card, name, department etc.
                </div>
                <div class="b-margin">
                  - Employees can see details income only theirs.
                </div>
              </div>
            </div>
            <div class="content">
              <br>
              <div>
                <strong>Booking Room,</strong>
                Successful by using HTML CSS BOOTSTRAP JQUERY AJAX for FRONTEND and PHP PDO for BACKEND
                development.
                <br><br>
                <div class="b-margin">
                  - Set permission of administrator.
                </div>
                <div class="b-margin">
                  - Administrator can change status such as approval, waiting confirm, cancel etc.
                </div>
                <div class="b-margin">
                  - Setting details of room.
                </div>
                <div class="b-margin">
                  - CRUD system for booking.
                </div>
                <div class="b-margin">
                  - Display details of booking on calendar.
                </div>
                <div class="b-margin">
                  - Validate time of booking before book.
                </div>
                <div class="b-margin">
                  - Feature search booking by using keyword such as Building Name, Class No, Room Name.
                </div>
                <div class="b-margin">
                  - Export report to jpg such as statistic graph.
                </div>
              </div>
            </div>
            <div class="content">
              <br>
              <div>
                <strong>Elearning Course,</strong>
                Successful by using HTML CSS BOOTSTRAP JQUERY AJAX for FRONTEND and PHP PDO for BACKEND
                development.
                <br><br>
                <div class="b-margin">
                  - Set permission of administrator.
                </div>
                <div class="b-margin">
                  - Setting details of course such as subject title detail.
                </div>
                <div class="b-margin">
                  - Upload media such as video and pdf file.
                </div>
                <div class="b-margin">
                  - CRUD system for administrator.
                </div>
                <div class="b-margin">
                  - Save the timestamp of the latest video viewed to resume watching next time.
                </div>
              </div>
            </div>
            <div class="content">
              <br>
              <div>
                <strong>Sexology Course,</strong>
                Successful by using Codigniter Framework (CI3), Indetails i used html css bootrap for UX/UI.
                <br><br>
                <div class="b-margin">
                  - Set information of website such as site title, color menu, banner.
                </div>
                <div class="b-margin">
                  - Set permission of user.
                </div>
                <div class="b-margin">
                  - Administrator can set user permissions for accessing only registered course.
                </div>
              </div>
            </div>
          </a>
        </li>
        <hr>
        <br> <br>
      </ul>
      <div class="year-container">
        <span class="year">2020 (Q1)</span>
      </div>
      <ul>
        <br> <br> <br>
        <li>
          <a href="https://ceresaperfume.com/" target="_blank">
            <div class="Subject">
              <h3>OFFERS GROUP CO,LTD.</h3>
              <h5>Online Marketing</h5>
              <div class="grey">May 2020 - November 2019</div>
            </div>

            <div class="content align-left">
              <br>
              <p>
                - Worked in the production teams creative video image and ads, And Application Support in company.
              </p>
            </div>
          </a>
        </li>
      </ul>
      <div class="year-container">
        <span class="year">2019</span>
      </div>
      <ul>
        <br> <br> <br>
        <a href="#">
          <li>
            <div class="Subject">
              <h3>SETUP MANAGEMENT COMPANY LIMITED</h3>
              <h5>Organization</h5>
              <div class="grey">November 2019 - December 2018</div>
            </div>
            <div class="content align-left">

              <br>
              <p>
                - Worked in the organization team, In details I work many thing such as design media by using adobe
                illustrator, meeting with customer etc.
              </p>

            </div>
          </li>
        </a>
      </ul>
      <div class="green-dot"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Experience",
}
</script>
<style scoped>
.Subject {
  /* padding: 20px 20px; */
  position: relative;
  cursor: pointer;
  transition: .5s;
}

.Subject h3 {
  color: rgb(213, 90, 45);
  font-size: 1.6rem;
  padding-top: 5px;
  font-weight: 500;
  margin-bottom: 0.2rem;
}

h2 {
  font-weight: 500;
  color: white;
  font-size: 1.8rem;
  border-bottom: 10px solid orangered;
  line-height: 0.4;
  width: 60px;
  transition: all ease 0.3s;
  margin-bottom: 2rem;
}

strong {
  font-weight: 500;
  color: orange;
}

a {
  color: white;
  border: none;
  text-decoration: none;
}

.green-dot {
  width: 16px;
  height: 16px;
  background: orange;
  border-radius: 50%;
  margin-left: -0.45em;
}

.year-container {
  position: absolute;
  margin: 0 -2.25em;
  z-index: 9999;
}

.year {
  color: #1a202c;
  font-weight: 500;
  font-size: 1.5rem;
  background: orange;
  border-radius: 16px;
  padding: 0.5rem;
}

h2:hover {
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  border-bottom: 10px solid orange;
  line-height: 0.4;
  width: 100px;
  transition: all ease 0.3s;
}

div {
  color: white;
  font-family: "canada-type-gibson" !important;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'canada-type-gibson', sans-serif;
  perspective: 800px;
}

.grey {
  color: #ddd;
  font-size: 0.9rem;
}

body {
  display: flex;
}

.timeline {
  width: 100%;
  background-color: #1a202c;
  color: #fff;
  padding: 30px 20px;
  word-wrap: normal;
}

.timeline ul {
  list-style-type: none;
  border-left: 2px solid white;
  padding: 10px 5px;
}

.timeline ul li {
  padding: 20px 20px;
  position: relative;
  cursor: pointer;
  transition: .5s;
}

.timeline ul li span {
  display: inline-block;
  border-radius: 25px;
  padding: 2px 5px;
  font-size: 15px;
  text-align: center;
}

.timeline ul li .content h3 {
  color: orange;
  font-size: 1.6rem;
  padding-top: 5px;
  font-weight: 500;
  margin-bottom: 0.2rem;
}

h5 {
  font-size: 1.2rem;
  padding-top: 5px;
  font-weight: 500;
  margin-bottom: 8px;
}

.timeline ul li .content p {
  padding: 5px 0px 15px 0px;
  font-size: 15px;
}

.timeline ul li:before {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  background-color: orangered;
  border-radius: 50%;
  left: -11px;
  top: 28px;
  transition: .5s;
  margin: 0;
}

.timeline ul li:hover {
  background-color: #1b405e;
  border-radius: 8px;
}

.timeline ul li:hover:before {
  background-color: rgb(192, 157, 60);
  box-shadow: 0px 0px 10px 2px orange;
}

@media (max-width: 300px) {
  .timeline {
    width: 100%;
    padding: 30px 5px 30px 10px;
  }

  .timeline ul li .content h3 {
    color: orange;
    font-size: 15px;
  }

}
</style>