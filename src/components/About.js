import React from 'react'
import './About.css'
import IconCloud from "./magicui/icon-cloud.tsx";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

const About = () => {
    return (
        <div className='about'>
        <h1>About US</h1>
        <div className="container1">
            <div className="content">
                <h2>Welcome to Our Website</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates 
                repellat ducimus quaerat itaque ea officia in animi commodi tempore? Lorem ipsum, dolor sit amet 
                consectetur adipisicing elit. Sunt vel labore aliquam debitis autem repellat minima ducimus architecto magnam 
                commodi cupiditate quae, saepe culpa maiores! Reprehenderit iste amet quaerat vel.</p>
                <button className='btn btn-primary'>Click Here</button>
            </div>
            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
            </div>
        </div>
        </div>
    )
}

export default About