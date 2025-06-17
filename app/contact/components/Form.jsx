const Form = () => {
  return (
    <section className="bg-gray-100 px-4 py-25">
        <h2 className="relative text-center text-4xl max-w-fit mx-auto font-semibold mb-16 after:w-[50%] after:h-1 after:bg-primary after:absolute after:bottom-[-16px] after:left-[25%]">Send us a Message</h2>
        <form method="POST" action="https://formspree.io/f/mwpbqvdg" className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
                <label htmlFor="Name">
                    <span className="block mb-2">Name</span>
                    <input className="border border-secondary hover:border-[#ff73b9] focus:border-primary focus:bg-white focus:outline-0 h-12 px-2 w-full rounded-md" name="Name" type="text" />
                </label>
                <label htmlFor="Phone">
                    <span className="block mb-2">Phone Number</span>
                    <input className="border border-secondary hover:border-[#ff73b9] focus:border-primary focus:bg-white focus:outline-0 h-12 px-2 w-full rounded-md" name="Phone" type="phone" />
                </label>
            </div>
            <label htmlFor="Message" className="block my-4">
                <span className="block mb-2">Your Message</span>
                <textarea className="border border-secondary hover:border-[#ff73b9] focus:border-primary focus:bg-white focus:outline-0 h-50 px-2 w-full rounded-md" name="Message" id="Message"></textarea>
            </label>
            <input type="submit" value="Send Message" className="w-full bg-primary hover:bg-secondary cursor-pointer p-3 text-white font-medium rounded-md" />
        </form>
    </section>
  )
}

export default Form