import ExperienceChapters from '@/components/Expirience/ExperienceChapters'
import HeroEx from '@/components/Expirience/HeroEx'
import JourneyCTA from '@/components/Expirience/JourneyCTA'
import RestorativeExploration from '@/components/Expirience/RestorativeExploration'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeroEx />
            <RestorativeExploration/>
            <ExperienceChapters/>
            <JourneyCTA />
        </div>
    )
}

export default page
