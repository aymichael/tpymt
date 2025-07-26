"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/legacy/image';


const MessageCard = ({ name, position, content, photo }) => {
    return (
        <div className="w-full ring-1 ring-black/5 dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex space-x-4">
                <div className='w-full flex gap-8'>
                    <div className="h-60 w-48 relative hidden md:block self-center">
                        <Image src={photo} alt={name} layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div className="flex flex-col justify-end">
                        <h3 className="text-xl/8 md:text-2xl/8 font-bold">{name}</h3>
                        <div className="text-gray-600 flex flex-col dark:text-gray-400">
                            {position.map((pos, index) => (
                                <p key={index} className="text-base md:text-base">{pos}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-lg flex flex-col space-y-4">
                {content.map((paragraph, index) => (
                    <p key={index} className="indent-8 text-base md:text-lg/8">{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default function Page() {
    const messages = [
        {
            "name": "Prof. CHAN Wai-yee",
            "position": [
                "Pro-Vice-Chancellor / Vice-President (Strategic Developments)",
                "Li Ka Shing Professor of Biomedical Sciences, CUHK"
            ],
            "content": ["As mentioned in “Outline Development Plan for the Guangdong Hong Kong-Macao Greater Bay Area” in 2019, the Central Government highlights that innovation and technology talents are in urgent need. The report of the 20th National Congress of the Communist Party of China emphasized again that talent is an essential propeller for innovation and technology development. With a mission “To combine tradition with modernity, and to bring together China and the West”, The Chinese University of Hong Kong (CUHK) continues to develop training programmes for innovative talents and explore ways to nurture talents in professional fields.", "Mathematics is the root of a number of disciplines. Improving the mathematical skills of teenagers will help foster talents in high tech fields such as computing, biotechnology, and financial technology, and facilitate the development of cross-disciplinary talents. The Department of Mathematics, Faculty of Science, CUHK initiated the “Training Programme for Young Mathematics Talents”, with aims of attracting outstanding young talents who are passionate about mathematics and already possess certain mathematics abilities in the field of mathematics, exploring their strengths and potentials, and dedicating themselves into the field of mathematics or its related disciplines. That is likened to “A journey of a thousand miles begins with a single step.”", "“Training Programme for Young Mathematics Talents” is co organized by the CUHK Shenzhen Research Institute. The programme targets to select mathematically gifted learners from high schools and offers them a chance to develop through the professional training provided by the Department of Mathematics. We wish more innovation and technology talents are nurtured and will dedicate themselves to innovation and technology development in the Greater Bay Area and the whole country through the programme."],
            "image": "/CHANWaiYee.jpg"
        },
        {
            "name": "Prof. SONG Chunshan",
            "position": [
                "Dean of Science",
                "Wei Lun Professor of Chemistry, CUHK"
            ],
            "content": ["The Faculty of Science at CUHK has long been committed to educating and inspiring the next generation of scientific innovators. Established in 1963, the Faculty of Science of CUHK has taken pride in providing the stimulating environment for young people and active scholars to learn science and undertake research. We hope to provide an enriched learning environment and endeavour to enhance students’ learning experience by offering a variety of lecture courses and activities. We hope our initiatives can help students develop their independent, critical thinking, and problem-solving skills, as well as boost their creativity.", "It is our privilege to embark on the “Training Programme for Young Mathematics Talents” which is funded by the TUYF Charitable Trust and supported by various organisations. Our Department of Mathematics has a world-class team with a global impact. The Programme offers enormous opportunities for the talents in GBA to broaden their horizons, unleash their potential and lay the foundation for their future development in the field of science and innovation.", "I sincerely hope that the programme will nurture more talents with constructive spirit. By learning science, devoting themselves to research activities and building on collaboration, I believe they could contribute to the improvement of human life and help make the world a better place."],
            "image": "/SONGChunShan.png"
        },
        {
            "name": "Prof. ZOU Jun",
            "position": [
                "Chairman, Department of Mathematics, Faculty of Science",
                "Choh-Ming Li Professor of Mathematics, CUHK"
            ],
            "content": ["Established in 1963 and ranked 41st in the 2022 QS World University Rankings by Subject, Department of Mathematics, Faculty of Science, CUHK, is a world-class incubator for academic professors and research scholars. “Training Programme for Young Mathematics Talents” is designed for students who love mathematics and possess certain potential in the field of mathematics. The programme aims to enable students to understand modern mathematics and experience mathematical research, as well as to stimulate and develop students' great potential in mathematics.", "We will arrange a series of mathematics courses that include linear algebra, calculus, non-Euclidean geometry, set theory and logic, and more. In addition to theoretical learning through daily classes, the programme allows students to participate in workshops and extracurricular activities so that they can have early and direct access to innovative technology and learn how to apply mathematical knowledge to solve real-world problems.", "The competitiveness of talents in the region will affect the core competitiveness of the entire country. Therefore great effort will be made in this programme to train students’ mathematical thinking, improve their innovation ability, and enhance their competitiveness from a younger age, in a partial attempt to help achieve the ultimate goal of “revitalizing the country with talents, and rejuvenating the country with science and technology.”"],
            "image": "/ZOUJun.png"
        },
        {
            "name": "Prof. YAM Yeung",
            "position": [
                "Director, CUHK Shenzhen Research Institute"
            ],
            "content": ["The Chinese University of Hong Kong (CUHK) Shenzhen Research Institute (SZRI) was established in 2007 as one of the very first research bases in the Mainland set up by Hong Kong tertiary institutions. Since its establishment, SZRI has been a pivot to CUHK’s many developments in the Guangdong-Hong Kong-Macao Greater Bay Area (GBA) and a bridging channel between Hong Kong and the Mainland. Aligning with CUHK’s mission “to combine tradition with modernity, and to bring together China and the West,” SZRI maintains itself as an earnest, pragmatic, pioneering, innovative entity in its wide ranging activities across the fields of technology application, education and research. The Institute adopts an objective, pro active, supportive and collaborative spirit in supporting the University, alumni and partners on endeavors in advanced research, talent cultivation, technology translation and start-up incubation.", "While we are witnessing the great progresses made in multiple scientific and technological fields in the Mainland today, we must never lose sight of the fundamental role played by basic research. In this regard, the launching of the “Training Programme for Young Mathematics Talents” co-organized by the Department of Mathematics of the Faculty of Science at CUHK and SZRI, is a timely reminder of this important message. We truly hope the Programme will be successful in cultivating high level talents with strong mathematical thinking at their early age and at the same time attaining the enhanced support of colleagues in the education community. The work of realizing a pool of young talents capable of engaging in forward-looking basic research and innovative technological exploration will have tremendous impact to the future of GBA, China and the world!"],
            "image": "/YAMYeung.jpg"
        }
    ]

    return (

        <div>
            <h1 className="text-4xl/16 font-bold md:mb-8 mb-4">
                Message from Management
            </h1>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={100}
                className="mySwiper"
            >
                {messages.map((message, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-1">
                            <MessageCard
                                name={message.name}
                                position={message.position}
                                content={message.content}
                                photo={message.image}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}