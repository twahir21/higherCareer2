import "../../styles/YouTube.css"

const Youtube = () => {
  return (
    <div>
   <section className="video-container">
       <h2>Welcome to HigherCareer Academy</h2>
       <div className="video-wrapper">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/iMnZ_v1sjPY?si=hYfPiZ5hcjOAOXyH" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
       </div>
     </section>
   
   
    </div>
  )
}

export default Youtube