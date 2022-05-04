import { useEffect, useState } from 'react'

import styles from './Links.module.css'
import LinksList from './LinksList'

export default function Links() {
    const [link, setLink] = useState('')
    const [formTouched, setFormTouched] = useState(false)
    const [error, setError] = useState(false)

    const [links, setLinks] = useState([])

    useEffect(() => {
        const links = getLS()
        if (links) {
            setLinks(JSON.parse(links))
        }
    }, [setLinks])

    const invalid = !link && formTouched || error

    function inputBlurHandler() {
        setFormTouched(true)
    }

    function inputChangeHandler(e) {
        setLink(e.target.value)
        setError(false)
    }

    function getLS() {
        return localStorage.getItem('links')
    }

    function addLS(link) {
        let links = getLS()
        if (links){
            links = JSON.parse(links)
            links.unshift(link)
            localStorage.setItem('links', JSON.stringify(links))
        }
        else
            localStorage.setItem('links', JSON.stringify([link]))
    }

    function removeLinks() {
        localStorage.removeItem('links')
        setLinks([])
    }

    async function submitHandler(e) {
        e.preventDefault()
        if (!formTouched) {
            setFormTouched(true)
            return
        }
        if (invalid) return
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        const result = await response.json()
        if (!result.ok) {
            setError(true)
            return
        }
        addLS({
            id: Math.random(),
            original: result.result.original_link,
            short: result.result.full_short_link
        })
        setLinks(JSON.parse(getLS()))
    }
    return <section className={styles.links__wrapper}>
        <form className={styles.links} onSubmit={submitHandler}>
            <img className={styles.bg} src='./images/bg-shorten-mobile.svg' alt='background image' />
            <div className={`${styles.form__input} ${invalid ? styles.invalid : undefined}`} onBlur={inputBlurHandler} onChange={inputChangeHandler} value={link} >
                <input type='text' placeholder="Shorten a link here..." />
            </div>
            <button className={styles.form__btn}>Shorten It!</button>
        </form>
        <LinksList links={links} />
        <button className={styles.remove} onClick={removeLinks}>Remove All</button>
    </section>
}