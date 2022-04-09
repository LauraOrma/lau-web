import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

const Navbar = () => {
    const { setTheme } = useNextTheme()
    const { isDark, type } = useTheme()

    return (
            <div>
                <button aria-label="toggle a light and dark color scheme">
                    <span className="material-icons">
                        {type === 'light' ? 'light_mode' : 'dark_mode'}
                    </span>
                </button>

                <div aria-label="open menu">

                </div>

                <Switch
                        checked={isDark}
                        onChange={(e) => {
                            console.log('hago cosas')
                            setTheme(e.target.checked ? 'dark' : 'light')
                        }
                        }
                />
            </div>
    )
}

export default Navbar
