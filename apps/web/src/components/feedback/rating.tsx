
export default function Rating() {
    return (
        <section className="flex justify-center">
            <div className="rating gap-8 pt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
        </section>
    )
}