import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
                	<div className="w-[1100px] bg-white rounded-lg shadow-lg">  <header className="flex justify-between items-center py-4 px-8 border-b border-neutral-300">
    	    <div className="flex items-center">
    	      <span className="font-title text-primary-700 text-2xl">TruSkill</span>
    	      <span className="text-black">Academy</span>
    	    </div>
    	    <nav className="flex gap-6 text-neutral-950">
    	      <a href="#" className="hover:text-primary-700">Experience the Difference</a>
    	      <a href="#" className="hover:text-primary-700">KYS</a>
    	      <a href="#" className="hover:text-primary-700">Prepare</a>
    	      <a href="#" className="hover:text-primary-700">Learn for free</a>
    	      <a href="#" className="hover:text-primary-700">Apply for job</a>
    	    </nav>
    	    <div className="flex gap-4">
    	      <button className="rounded-md px-6 py-2 border border-primary-700 text-primary-700 hover:bg-primary-100">Dashboard</button>
    	      <button className="rounded-md px-6 py-2 bg-primary-700 text-white">Log In</button>
    	    </div>
    	  </header>
    	  <section className="px-24 py-12">
    	    <div className="text-center">
    	      <p className="text-sm text-neutral-500">WELCOME TO TRUSKILL ACADEMY</p>
    	      <h1 className="font-title text-4xl text-neutral-950 font-semibold leading-tight">
    	        We focus on fostering <br /> essential skills for growth <br /> and innovation.
    	      </h1>
    	      <p className="mt-4 text-neutral-500 text-base">
    	        Our goal is to empower individuals with <br /> practical, future-ready abilities.
    	      </p>
    	      <div className="mt-8 flex gap-4 justify-center">
    	        <button className="bg-primary-700 text-white rounded-md px-8 py-3 hover:bg-primary-800">Explore Courses</button>
    	        <button className="border border-neutral-300 text-neutral-700 rounded-md px-8 py-3 hover:bg-neutral-100">KYS (Know Your Self)</button>
    	      </div>
    	    </div>
    	  </section>
    	<h2 className="font-title text-neutral-950 text-xl font-semibold">
    	      CHOOSE OUR PROGRAM
    	    </h2>
    	
    	
    	
    	  <section className="flex justify-center relative px-24 mt-8">
    	    <div className="absolute left-0 top-[50%] flex flex-col items-center transform -translate-y-1/2">
    	      
    	      
    	    </div>
    	
    	    <div className="absolute right-0 top-[50%] flex flex-col items-center transform -translate-y-1/2">
    	      
    	    </div>
    	
    	    
    	  </section>
    	
    	  <section className="text-center mt-16">
    	    
    	  </section>
    	
    	  <section className="flex justify-center gap-10 mx-24 mt-8">
    	    <div className="flex flex-col items-start bg-neutral-50 rounded-md p-8 shadow-md w-[500px]">
    	      <p className="text-neutral-500 text-sm mb-2">For Individual User</p>
    	      <h3 className="text-neutral-950 text-lg font-semibold mb-4">
    	        Individual user related Text Title here
    	      </h3>
    	      <p className="text-neutral-500 mb-6">
    	        Individual user related little information displayed here
    	      </p>
    	      <button className="rounded-md bg-primary-700 text-white px-6 py-2 mt-auto">
    	        Read More
    	      </button>
    	    </div>
    	    <div className="flex flex-col items-start bg-neutral-50 rounded-md p-8 shadow-md w-[500px]">
    	      <p className="text-neutral-500 text-sm mb-2">For Institution</p>
    	      <h3 className="text-neutral-950 text-lg font-semibold mb-4">
    	        Institutions related Text Title here
    	      </h3>
    	      <p className="text-neutral-500 mb-6">
    	        Institution related little information displayed here
    	      </p>
    	      <button className="rounded-md bg-primary-700 text-white px-6 py-2 mt-auto">
    	        Read More
    	      </button>
    	    </div>
    	  </section>
    	</div> 
                </div>
  )
}


