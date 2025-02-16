import { Link } from "react-router-dom";
import { styles } from "../../constants/styles";

const Resume = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className={`${styles.paddingX} mx-auto max-w-7xl`}>
        <div className="min-h-screen pt-20">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/" 
              className="text-secondary hover:text-white text-[18px] font-medium"
            >
              ← Back to Portfolio
            </Link>
            <a 
              href="/Kailash_Anand_Full_Stack.pdf"
              download="Kailash_Anand_Full_Stack.pdf"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              Download Resume
            </a>
          </div>
          
          <div className="bg-tertiary rounded-2xl p-8">
            <object
              data="/Kailash_Anand_Full_Stack.pdf"
              type="application/pdf"
              className="w-full h-[800px]"
            >
              <p className="text-white">
                Your browser does not support PDFs. 
                <a href="/Kailash_Anand_Full_Stack.pdf" className="text-secondary hover:text-white ml-2">
                  Click here to download instead.
                </a>
              </p>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 