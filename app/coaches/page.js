
import Image from 'next/image';

function CoachesBox({ photo, name, intro }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:odd:flex-row md:even:flex-row-reverse items-center md:items-start">
                <div className="h-48 w-48 relative hidden md:block self-center">
                    <Image src={photo} alt={name} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
            <div className="w-full mt-4 md:mt-0 md:ml-4">
                <h2 className="text-xl/8 md:text-2xl/8 font-bold text-center md:text-left">{name}</h2>
                <p className="text-base md:text-lg/8 mt-2 text-gray-700">{intro}</p>
            </div>
        </div>
    );
}

export default function CoachesPage() {
    return (
        <div>
            <h1 className="text-4xl/16 font-bold mb-4">Coaches</h1>
            <div className="flex flex-col space-y-2 md:space-y-4">
                <CoachesBox
                    photo="/MCBREEN.jpg"
                    name="Prof. Michael MCBREEN"
                    intro="Prof. Michael MCBREEN received his bachelor's degree from McGill University in Canada and his PhD from Princeton University in the United States. He is currently an assistant professor in the Department of Mathematics at The Chinese University of Hong Kong. His research interests include representation theory, symplectic geometry and string theory."
                />
                <CoachesBox
                    photo="/CHANHiuNing.jpg"
                    name="Dr. CHAN Hiu Ning"
                    intro="Dr. CHAN Hiu Ning graduated from The University of Hong Kong with a bachelor's degree and then received her MPhil and PhD from The Chinese University of Hong Kong and The University of Hong Kong respectively. Her research interest is partial differential equations with numerical methods. Dr. CHAN is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong, and a lecturer of the Enrichment Programme for Young Mathematics Talents."
                />
                <CoachesBox
                    photo="/CHANKaiLeung.jpg"
                    name="Dr. CHAN Kai Leung"
                    intro="Dr. CHAN Kai Leung received his PhD from The Chinese University of Hong Kong with research interests in mirror symmetry in symplectic geometry and string theory. Dr. CHAN is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong. He is the programme coordinator as well as a lecturer of the Enrichment Programme for Young Mathematics Talents. In addition, Dr. CHAN serves as a fellow of the Centre for Promoting Science Education of the Faculty of Science and Course Advisor of Diploma Yi Jin. Dr. CHAN is enthusiastic about teaching and received the 2021 Faculty Exemplary Teaching Award."
                />
                <CoachesBox
                    photo="/CHANPingShun.jpg"
                    name="Dr. CHAN Ping Shun"
                    intro="Dr. CHAN Ping Shun graduated from Columbia University with a bachelor's degree and obtained his PhD from the Department of Mathematics at The Ohio State University, with research interest in number theory. Dr. CHAN is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong, and a lecturer of the Enrichment Programme for Young Mathematics Talents."
                />
                <CoachesBox
                    photo="/CHENGManChuen.jpg"
                    name="Dr. CHENG Man Chuen"
                    intro="Dr. CHENG Man Chuen received his bachelor’s degree and MPhil from the Department of Mathematics, The Chinese University of Hong Kong, and obtained PhD from Stanford University. He later served as a postdoctoral fellow at Massachusetts Institute of Technology and University of British Columbia. His research interest is algebraic topology. Dr. CHENG is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong, and a lecturer of the Enrichment Programme for Young Mathematics Talents."
                />
                <CoachesBox
                    photo="/LIChunChe.jpg"
                    name="Dr. LI Chun Che"
                    intro="Dr. LI Chun Che received his PhD from the University of California at Los Angeles, and worked as a postdoctoral fellow at the University of California at Los Angeles and the Institute of Mathematics at Academia Sinica, Taiwan. His research interests are number theory and representation theory of automorphic forms. Dr. LI is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong, and a lecturer of the Enrichment Programme for Young Mathematics Talents."
                />
                <CoachesBox
                    photo="/LIUChunLung.jpg"
                    name="Dr. LIU Chun Lung"
                    intro='Dr. LIU Chun Lung received his PhD from Michigan State University in the United States, and worked as a postdoctoral fellow at the University of Duisburg Essen in Germany. His research interests are algebraic geometry and algebraic cobordism. Dr. LIU is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong, and a lecturer of the Enrichment Programme for Young Mathematics Talents. Dr. LIU is good at introducing advanced mathematical theories in simple terms, and has been invited as a guest on the TVB program " Sidewalk Scientist" for many times to promote and popularize mathematics education.'
                />
                <CoachesBox
                    photo="/NGMingHo.jpg"
                    name="Dr. NG Ming Ho"
                    intro="Dr. NG Ming Ho received his BSc, MPhil and PhD from The University of Hong Kong. His main research interest lies in analytic number theory including automorphic forms and L-functions. Dr. NG is currently an assistant lecturer in the Department of Mathematics at The Chinese University of Hong Kong."
                />
                <CoachesBox
                    photo="/PANLi.jpg"
                    name="Dr. PAN Li"
                    intro="Dr. PAN Li graduated from Dalian University of Technology with a bachelor's degree in mathematics, and received her PhD from The University of Hong Kong. Her research interests are operations research and optimization theory. Dr. PAN is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong."
                />
                <CoachesBox
                    photo="/XIAOJingJing.jpg"
                    name="Dr. XIAO Jing Jing"
                    intro="Dr. XIAO Jingjing graduated from the School of Mathematics and Statistics of Wuhan University with a bachelor’s degree, and then received his PhD from the Department of Mathematics at The Chinese University of Hong Kong, with research interests in partial  differential  equations and hyperbolic conservation laws. Dr. XIAO is currently a lecturer in the Department of Mathematics at The Chinese University of Hong Kong. Dr. XIAO is enthusiastic about teaching and received the 2018 Faculty Exemplary Teaching Award."
                />
            </div>
        </div>
    );
}