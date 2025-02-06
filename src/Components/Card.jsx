import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";


export default function Card({ course,likedCourses, setLikedCourses}) {

    function likeHandler(){
        if(likedCourses.includes(course.id)){
            //Already liked
            setLikedCourses((prev)=>prev.filter((cid)=>cid !== course.id));
            toast.warning("Like Removed");
        }else{
            //Not liked
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked Sucessfully");
        }
    }

    return (
        <div className='w-[300px] bg-bgDark opacity-80  rounded-md overflow-hidden'>
            <div className="relative rounded-sm">
                <img src={course.image.url} alt={course.image.alt} />
                <div className=" w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                    <button onClick={likeHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />):(<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                        
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white font-bold text-lg leading-6'>{course.title}</p>
                <p className='text-white mt-2'>
                    {
                        course.description.length > 0 ? (course.description.substr(0,100)+"..."):(course.description)
                    }
                </p>
            </div>
        </div>
    );
}

