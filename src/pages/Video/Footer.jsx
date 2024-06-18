import React from 'react'

const Footer = () => {
    return (
        <ul className=' z-0 list-none bg-black flex justify-evenly h-[300px] pt-[30px] w-full'>
            <li>
                <h3 className=' text-[#800000] brightness-[1.6] mb-[20px] font-bold text-[20px]'>Về Netflix</h3>
                <ul className='list-none *:text-white/[.7] *:cursor-pointer *:mb-1 *:transition-all *:font-semibold'>
                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        Câu hỏi thường gặp
                    </li>

                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        Quyền riêng tư
                    </li>

                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        Tuỳ chọn cookie
                    </li>

                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        Việc làm
                    </li>

                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        Thông tin pháp lý
                    </li>

                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        Chỉ có trên Netflix
                    </li>

                </ul>
            </li>

            <li>
                <h3 className='text-[#800000] brightness-[1.6] mb-[20px] font-bold text-[20px]'>Về chúng tôi</h3>
                <ul className='list-none *:text-white/[.7] *:cursor-pointer *:mb-1 *:transition-all *:font-semibold'>
                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        21520419 - Phạm Ngọc Qúi
                    </li>

                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        21520390 - Trần Nhựt Phát
                    </li>

                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        21520905 - Nguyễn Thị Thu Hương
                    </li>

                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        21521129 - Ngô Võ Quang Minh
                    </li>

                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        21522162 - Nguyễn Võ Hoàng Huy
                    </li>

                    <li className='hover:text-[red] hover:scale-[1.1] '>
                        21522346 - Trần Tuấn Minh
                    </li>

                </ul>
            </li>
        </ul>
    );
}

export default Footer;