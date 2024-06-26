import { signIn } from "@/actions/sign-in"
import { Button } from "@/components/ui/button"
import UserProfile from "@/components/user-profile"

const Home = () => {
    return (
        <div className="min-h-screen flex">
            <div className="min-h-full basis-3/12">
                <form action={signIn}>
                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Test
                    </Button>
                </form>
                <UserProfile />
            </div>
            <div className="min-h-full flex-1">

            </div>
        </div>
    )
}

export default Home