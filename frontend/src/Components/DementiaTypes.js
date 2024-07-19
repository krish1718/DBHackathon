import React, { useState, useRef, useEffect } from "react";
import "../Styles/DementiaTypes.css";

const faqData = [
  {
    question: "Creutzfeldt-Jakob Disease (CJD)",
    answer: `
        Creutzfeldt-Jakob Disease (CJD) is a rare, rapidly progressing form of dementia caused by abnormal prion proteins in the brain. These misfolded proteins trigger a destructive domino effect, damaging brain cells and leading to symptoms like confusion, memory problems, mood changes, and involuntary muscle movements. CJD occurs in three main types:<br/><br/>
        
        1. Sporadic CJD (85% of cases) arises spontaneously with no known cause, typically between ages 60-65.<br/>
        2. Familial CJD (10-15%) is inherited due to genetic mutations, often appearing at a younger age.<br/>
        3. Acquired CJD (1%) results from external prion exposure, such as medical procedures (iatrogenic CJD) or consumption of contaminated meat (variant CJD).<br/><br/>
        
        Diagnosis is challenging, relying on EEGs, MRIs, lumbar punctures, and protein misfolding cyclic amplification (PMCA). There is no cure; treatment focuses on symptom management and supportive care. Most patients with sporadic CJD die within a year of diagnosis. Familial and variant forms may have slightly longer survival. Due to its rarity and rapid progression, CJD remains a significant challenge for researchers and clinicians.
      `,
    videoSrc: "/videos/creutzfeldt.mp4", // Path to local video file
  },
  {
    question: "Dementia with Lewy Bodies (DLB)",
    answer: `
        Dementia with Lewy bodies (DLB) is a progressive dementia characterized by declines in thinking, reasoning, and independent function. Core symptoms include fluctuating cognition, visual hallucinations, REM sleep behavior disorder, and Parkinsonism (slow movement, tremors, rigidity). The disease is linked to abnormal deposits of alpha-synuclein protein (Lewy bodies) in the brain.<br/><br/>
        
        DLB is diagnosed clinically, as there is no definitive test except postmortem autopsy. It is often distinguished from Parkinson’s disease dementia by the timing of dementia onset relative to movement symptoms. DLB overlaps with Alzheimer’s and Parkinson’s diseases, complicating diagnosis.<br/><br/>
        
        Causes of DLB are unclear, with no specific genes or family history identified. Treatments focus on managing symptoms; cholinesterase inhibitors may help cognitive symptoms, while antipsychotics must be used cautiously due to severe side effects. Antidepressants, particularly SSRIs, are commonly prescribed.<br/><br/>
        
        DLB progresses over time, worsening brain function and shortening lifespan. Unlike Alzheimer’s, early DLB features prominent movement issues, hallucinations, and REM sleep disturbances. Disruptions of the autonomic nervous system are also common early in DLB. Effective management requires personalized treatment and close collaboration with healthcare providers.
      `,
    videoSrc: "/videos/lewy.mp4", // Path to local video file
  },
  {
    question: "Frontotemporal Dementia (FTD)",
    answer: `
        Frontotemporal dementia (FTD) refers to disorders caused by progressive nerve cell loss in the brain's frontal or temporal lobes, affecting behavior, personality, and language. The primary diseases causing FTD involve the tau and TDP43 proteins. FTD is categorized into three main types:<br/><br/>
        
        1. Behavioral variant FTD (bvFTD): Characterized by significant personality and behavior changes, typically affecting those in their 50s and 60s.<br/>
        2. Primary progressive aphasia (PPA): Impacts language skills. Semantic variant affects word comprehension, while nonfluent/agrammatic variant affects speech fluency.<br/>
        3. Motor function disorders: Include ALS, corticobasal syndrome, and progressive supranuclear palsy (PSP), causing muscle weakness and movement issues.<br/><br/>
        
        FTD is less common than Alzheimer's in those over 65 but nearly as common as younger-onset Alzheimer's in the 45-65 age range, with 50,000-60,000 cases in the U.S. Key differences from Alzheimer's include earlier onset, behavior changes as initial symptoms, and less common hallucinations.<br/><br/>
        
        Diagnosis relies on expert evaluation and brain imaging. About one-third of FTD cases are inherited. There are no specific treatments; medications can manage symptoms like agitation and depression. FTD progressively worsens, leading to severe physical decline and eventual death from related complications.
      `,
    videoSrc: "/videos/frontotemporal.mp4", // Path to local video file
  },
  {
    question: "Huntington's Disease (HD)",
    answer: `
        Huntington's disease (HD) is a progressive brain disorder caused by a defective gene on chromosome 4. This dominant gene codes for the huntingtin protein, leading to brain changes that affect movement, mood, and thinking skills. HD is named after Dr. George Huntington, who first described it in the late 1800s.<br/><br/>
        
        Symptoms typically develop between ages 30 and 50, but can appear as early as age 2 or as late as 80. Hallmark symptoms include uncontrolled movements, cognitive decline, and mood changes like depression, anxiety, and irritability. Obsessive-compulsive behaviors are also common.<br/><br/>
        
        Diagnosis involves a genetic test that can confirm the presence of the defective gene, which has extra repeats of a specific chemical code. Genetic counseling is recommended before and after testing.<br/><br/>
        
        There is no cure for HD, and treatments focus on managing symptoms. Chorea (involuntary movements) is often treated with atypical antipsychotics or tetrabenazine. Irritability may be managed with antipsychotics or SSRIs (antidepressants). Obsessive-compulsive behaviors are also treated with SSRIs. Other symptoms like anxiety, depression, and insomnia are treated according to general medical guidelines.<br/><br/>
        
        Ongoing medical appointments are crucial to adjust treatments and manage symptoms effectively.
      `,
    videoSrc: "/videos/huntington.mp4", // Path to local video file
  },
  {
    question: "Mixed Dementia",
    answer: `
        Mixed dementia is a condition where more than one type of dementia-related brain changes occur concurrently. The most common form involves a combination of Alzheimer's disease pathology and vascular dementia, and sometimes includes Lewy bodies. Autopsy studies suggest mixed dementia may be more prevalent than previously recognized.<br/><br/>
        
        Symptoms of mixed dementia vary depending on the types and locations of brain changes, often resembling those of Alzheimer's or other dementia types. Diagnosis is challenging as many individuals are initially diagnosed with only one type of dementia, typically Alzheimer's, despite later findings of mixed pathology upon autopsy.<br/><br/>
        
        Treatment focuses on managing symptoms since there are no specific FDA-approved drugs for mixed dementia. Physicians often prescribe medications approved for Alzheimer's disease based on symptoms. Researchers emphasize the importance of understanding mixed dementia better to potentially prevent its development by managing vascular risk factors.<br/><br/>
        
        Overall, mixed dementia underscores the complexity of dementia and the need for comprehensive approaches to diagnosis, treatment, and prevention.
      `,
    videoSrc: "/videos/mixed.mp4", // Path to local video file
  },
  {
    question: "Normal Pressure Hydrocephalus (NPH)",
    answer: `
        Normal pressure hydrocephalus (NPH) is a brain disorder characterized by the accumulation of excess cerebrospinal fluid (CSF) in the brain's ventricles, despite normal CSF pressure. This accumulation enlarges the ventricles and can lead to symptoms such as difficulty walking (gait disturbance), cognitive decline resembling mild dementia, and loss of bladder control. NPH primarily affects older adults, often going misdiagnosed as Alzheimer's or Parkinson's disease.<br/><br/>
        
        Treatment typically involves surgical insertion of a shunt to drain excess CSF from the brain to the abdomen, aiming to alleviate gait difficulties, though cognitive and bladder symptoms may not improve significantly. Diagnosis relies on clinical evaluation, brain imaging (MRI or CT scan), and sometimes CSF tests to confirm the presence of enlarged ventricles and exclude other conditions. Research on shunt effectiveness shows variable outcomes, with improvements in walking observed more consistently than cognitive or bladder symptoms.<br/><br/>
        
        Despite ongoing research to better understand NPH's prevalence and mechanisms, nonsurgical treatments like diuretics have not proven effective. Further studies are needed to refine diagnostic criteria, improve treatment outcomes, and extend understanding of how CSF dynamics contribute to NPH symptoms.
      `,
    videoSrc: "/videos/mixed.mp4", // Path to local video file
  },
  {
    question: "Posterior Cortical Atrophy (PCA)",
    answer: `
        Posterior cortical atrophy (PCA) is a rare neurodegenerative condition characterized by progressive degeneration of the brain's posterior cortex, primarily affecting visual processing areas. It shares some pathological features with Alzheimer’s disease, such as amyloid plaques and neurofibrillary tangles, but these occur in different brain regions. Onset typically occurs between ages 50 and 65, distinct from the more common onset age of Alzheimer's.<br/><br/>
        
        Diagnosis of PCA is challenging due to its rarity and variable symptoms, often mistaken initially for eye problems. Diagnostic tools include neuropsychological tests, brain imaging, and exclusion of other conditions. Symptoms include difficulties with visual tasks, spatial orientation, and object recognition, along with anxiety and later-stage memory impairment.<br/><br/>
        
        Treatment focuses on managing symptoms, as there are no therapies to halt PCA's progression. Some treatments used for Alzheimer's may be considered, but no specific medications target PCA. Ongoing research aims to improve understanding of PCA and develop more effective treatments.
      `,
    videoSrc: "/videos/mixed.mp4", // Path to local video file
  },
];

const DementiaTypes = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [childMode, setChildMode] = useState(false);
  const videoRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChildModeToggle = () => {
    setChildMode(!childMode);
  };

  useEffect(() => {
    // Pause all videos when accordion changes
    videoRefs.current.forEach((video) => {
      if (video && !video.paused) {
        video.pause();
      }
    });

    // Play the video of the currently active accordion item
    if (activeIndex !== null && childMode) {
      const video = videoRefs.current[activeIndex];
      if (video) {
        video.play();
      }
    }
  }, [activeIndex, childMode]);

  const handleVideoError = (e) => {
    e.target.style.display = "none"; // Hide the video element on error
    // Optionally, display a fallback message or image
  };

  return (
    <section className="sagarkaFaqsContainer" id="sagarkaFaqs">
      <h1>Types of Dementia</h1>
      <button
        onClick={handleChildModeToggle}
        className="sagarkaChildModeToggle"
      >
        {childMode ? "Switch to Text Mode" : "Switch to Child Mode"}
      </button>
      <div className="sagarkaTwoAccordion">
        <div className="sagarkaAccordion">
          {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq, index) => (
            <div className="sagarkaAccordionItem" key={index}>
              <div
                className={`sagarkaAccordionItemHeader ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </div>
              <div
                className="sagarkaAccordionItemBody"
                style={{ maxHeight: activeIndex === index ? "none" : "0" }}
              >
                {childMode ? (
                  faq.videoSrc ? (
                    <div className="sagarkaVideoContainer">
                      <video
                        title={faq.question}
                        controls
                        src={faq.videoSrc}
                        ref={(el) => (videoRefs.current[index] = el)}
                        onError={handleVideoError}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <div className="sagarkaVideoError">Video not available</div>
                  )
                ) : (
                  <div
                    className="sagarkaAccordionItemBodyContent"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="sagarkaAccordion">
          {faqData.slice(Math.ceil(faqData.length / 2)).map((faq, index) => (
            <div
              className="sagarkaAccordionItem"
              key={index + Math.ceil(faqData.length / 2)}
            >
              <div
                className={`sagarkaAccordionItemHeader ${
                  activeIndex === index + Math.ceil(faqData.length / 2)
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  toggleAccordion(index + Math.ceil(faqData.length / 2))
                }
              >
                {faq.question}
              </div>
              <div
                className="sagarkaAccordionItemBody"
                style={{
                  maxHeight:
                    activeIndex === index + Math.ceil(faqData.length / 2)
                      ? "none"
                      : "0",
                }}
              >
                {childMode ? (
                  faq.videoSrc ? (
                    <div className="sagarkaVideoContainer">
                      <video
                        title={faq.question}
                        controls
                        src={faq.videoSrc}
                        ref={(el) =>
                          (videoRefs.current[
                            index + Math.ceil(faqData.length / 2)
                          ] = el)
                        }
                        onError={handleVideoError}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <div className="sagarkaVideoError">Video not available</div>
                  )
                ) : (
                  <div
                    className="sagarkaAccordionItemBodyContent"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DementiaTypes;
