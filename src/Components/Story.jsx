import React from "react";
import Img from "../assets/coffee_cafe_image_counter.png"
import Img1 from "../assets/coffee_cafe_image_students.png"
import Img2 from "../assets/caffee_cafe_image_cafe_area.png"
import Img3 from "../assets/image_of_karad.jpg"


export default function Story() {
  return (
    <section className="story-section" id="about">
      <div className="story-container">

        {/* TEXT CONTENT */}
        <div className="story-content">
          <span className="story-tag">Our Story</span>

          <h2 className="story-heading">
            From a Dream in Karad to Your Cup
          </h2>

          <p>
            It all started on a monsoon evening in 2019, in the heart of Karad,
            Maharashtra. Our founder, Rohan, was sitting in a small chai stall
            near the Krishna River, watching the rain blur the ghats in the
            distance. He’d just returned from Bangalore, where he’d fallen in
            love with specialty coffee culture — but one question stayed with
            him: <strong>Why doesn’t Karad have a place like this?</strong>
          </p>

          <p>
            Karad has always been a city of students, dreamers, and doers. It
            deserved more than instant coffee and hurried cups. It deserved a
            space where conversations could linger, ideas could brew, and every
            sip felt intentional.
          </p>

          <p>
            So Rohan took a leap. Partnering with a local roaster in Satara, he
            learned the craft through YouTube tutorials and countless failed
            espressos. Ember & Brew opened in a tiny 400 sq. ft. corner near the
            old bus stand.
          </p>

          <p className="story-highlight">
            Today, Ember & Brew is more than a café — it’s a feeling.  
            We didn’t just open a café. We started a conversation.
          </p>
        </div>

        {/* IMAGE SECTION — YOU ADD YOUR IMAGES */}
        <div className="story-images">
          <div className="story-image">
            <img src={Img} alt="Story visual 1" />
          </div>

          <div className="story-image">
            <img src={Img1} alt="Story visual 2" />
          </div>

          <div className="story-image">
            <img src={Img2} alt="Story visual 3" />
          </div>

          <div className="story-image">
            <img src={Img3} alt="Story visual 4" />
          </div>

         <div className="story-image">
            <img src="https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fHww" alt="Story visual 4" />
          </div>

        </div>
        

      </div>
    </section>
  );
}
