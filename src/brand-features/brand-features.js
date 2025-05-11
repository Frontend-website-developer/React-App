import { feature } from './cards.js'



function LucaFeatures() {
  const featureItems = feature.map(feature =>
   <div className='md:row-span-4 bg-sky-500/[.06] p-10 m-5 text-center rounded' key={feature.id}>

      <img className='inline mb-4' src={feature.image} alt="" />
      <h4 className='font-bold text-2xl mb-2'>{feature.heading}</h4>
      <p>{feature.paragraph}</p>
   </div>   
  )
  return (
    <div class="container mx-auto mt-14 mb-14">
      <div class="md:flex">
          {featureItems}
      </div>   
    </div>
    
    
  );
}

export default LucaFeatures;
