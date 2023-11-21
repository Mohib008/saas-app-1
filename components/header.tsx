import Logo from '@/components/logo'
import { DarkModeToggle } from './DarkModeToggle'
import UserButton from './userButton'

function header() {
  return (
    <header className='stiky top-0 z-50 bg-white dark:bg-gray-900'>
        <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 max-w-7xl mx-auto bg-white dark:bg-gray-900'>
            <Logo />
            <div className='flex flex-1 items-center space-x-4'>
                {/* Language select */}

                {/* session && ( ... ) */}
                {/*DarkModeToggle*/}
                <DarkModeToggle />

                {/*UserButton*/}
                <UserButton />
            </div>  
        </nav>
        {/* uppgrade banner */}
    </header>
  )
}

export default header