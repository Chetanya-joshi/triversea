import React from 'react';
import './MainBody.css';
import dance from '../../../src/Image/dance.webp'
import music from '../../../src/Image/music.webp'
import wordway from '../../../src/Image/wordway.webp'
import wellway from '../../../src/Image/wellway.webp'
import time from '../../../src/Image/time.webp'

export default function Mainbody() {
  return (
    <div>
      <div className="section4 m-auto mt-5 mb-5 pb-5">
        <h1>WELCOME TO WELMONT PRESCHOOL</h1>

        <div className="section5 mt-5 d-flex">
          <div className="w-50 school">
            <h2>Welcome to Welmont Preschool, where each new day heralds a journey of exploration with fun & play.</h2>
            <p className=" m-auto mt-3">We, at Welmont, understand the crucial importance of the correct stimulation required during the early years to enhance a child’s development intellectually, physically, emotionally and socially, to lay down a solid foundation for your child to maximise all future learning abilities.

              As per UNICEF, a child’s brain develops the fastest in the earliest years of life. These initial experiences are critical. They are the building blocks for the development of the brain architecture for all the learning to come in the years ahead.</p>



          </div>

          <div className="section6">
            <div className="boxs ">
              <p>
                In the ftrst few years of life, more than one million neural connections are formed each second – a pace that never repeats ever again.

                UNICEF’s Global Report
                on Early Childhood Development, 2017
              </p>
            </div>


          </div>



        </div>
      </div>




      {/* // Next section4 */}

      <div className="mt-5">
        <div className="w-75 m-auto text-center mb-5">
          <h1>LEARNINGS DELIVERED:
            THE WAY THEY LOVE IT!</h1>
        </div>
<div className="d-flex act">

        <div className="activitys ">

          <img src={dance} />
          <div  className="mb-3">
            <p style={{fontWeight:'700'}}>DANCE</p>
            <span style={{fontWeight:'bold' , color:'#944E63' , fontSize:'20px'}}>WIGGLYWAY</span><br />
            <span style={{fontWeight:'700'}}> when kids wiggle, the heart tickles</span>
          </div>


          <p>A fun activity that develops coordination, balance, physical strength & flexibility.</p>

        </div>


        <div className="activitys ">

          <img src={music} />
          <div  className="mb-3">
            <p style={{fontWeight:'700'}}>MUSIC</p>
            <span style={{fontWeight:'bold' , color:'#944E63' , fontSize:'20px'}}>WELTUNES</span><br />
            <span style={{fontWeight:'700'}}> What’s life without music?</span>
          </div>


          <p>Enhances cognitive abilities, creativity, hand-eye coordination and makes kids better listeners.</p>

        </div>


        <div className="activitys ">

          <img src={wordway} />
          <div  className="mb-3">
            <p style={{fontWeight:'700'}}>LINGUISTICS</p>
            <span style={{fontWeight:'bold' , color:'#944E63' , fontSize:'20px'}}>WORDWAY</span><br />
            <span style={{fontWeight:'700'}}>It’s the wordly way.</span>
          </div>


          <p>A phonic-based language program that emphasizes pronunciation, diction, proficiency & phonics.</p>

        </div>


        <div className="activitys ">

          <img src={wellway} />
          <div  className="mb-3">
            <p style={{fontWeight:'700'}}>WELLNESS</p>
            <span style={{fontWeight:'bold' , color:'#944E63' , fontSize:'20px'}}>WELLWAY</span><br />
            <span style={{fontWeight:'700'}}> A happy child is a healthy child</span>
          </div>


          <p>Builds gross & fine motor skills, coordination, balance, flexibility & strength.</p>

        </div>


        <div className="activitys ">

          <img src={time} />
          <div className="mb-3">
            <p style={{fontWeight:'700'}}> STORYTELLING</p>
            <span style={{fontWeight:'bold' , color:'#944E63' , fontSize:'20px'}}>ONCE UPON A TIME</span><br />
            <span style={{fontWeight:'700'}}>It’s story time!</span>
          </div>


          <p>A valuable tool to enrich kids' imagination and convey tradition & culture in a fun way.</p>

        </div>
        </div>

      </div>

    </div>
  )
}
