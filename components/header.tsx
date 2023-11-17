import Logo from '@/components/logo'
import { DarkModeToggle } from './DarkModeToggle'

function header() {
  return (
    <header className='stiky top-0 z-50 bg-white dark:bg-gray-900'>
        <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 max-w-7xl mx-auto bg-white dark:bg-gray-900'>
            <Logo />
            <div className='flex-1 flex items-center space-x-4'>
                {/* Language select */}

                {/* session && ( ... ) */}
                {/*DarkModeToggle*/}
                <DarkModeToggle />

                {/*UserButton*/}
            </div>  
        </nav>
        {/* uppgrade banner */}
    </header>
  )
}

export default header