import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="">
                <h3 className="text-md font-semibold mb-4">Resourcers</h3>
                <ul className="space-y-2">
                    {
                        resourcesLinks.map((resource, index) => (
                            <li key={index}>
                                <a href={resource.href} className="text-neutral-300 hover:underline hover:text-white">{resource.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="">
                <h3 className="text-md font-semibold mb-4">Plataform</h3>
                <ul className="space-y-2">
                    {
                        platformLinks.map((resource, index) => (
                            <li key={index}>
                                <a href={resource.href} className="text-neutral-300 hover:underline hover:text-white">{resource.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="">
                <h3 className="text-md font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                    {
                        communityLinks.map((resource, index) => (
                            <li key={index}>
                                <a href={resource.href} className="text-neutral-300 hover:underline hover:text-white">{resource.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
