import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Navigation = styled.nav`
    grid-column: 1/-1;
    height: 10vh;
    display: grid;
    grid-template-columns: inherit;
    align-content: center;
    background: var(--navbar-bg);
    padding: 1rem 2rem;
    margin-bottom: 6rem;
    box-shadow: var(--shadow-light);
    z-index: 20;
    transition: background-color 0.4s;
`

const Brand = styled.h2`
    grid-column: center-start / span 1;
    font-size: 2.4rem;
    color: var(--color-primary);
`

const NavList = styled.ul`
    grid-column: span 1 / center-end;
    display: flex;
    align-items: center;
    justify-self: end;
    align-self: center;
    list-style: none;
`

const NavItem = styled.li.attrs({ className: "controlos-dark-mode" })`
    &:not(:last-child) {
        margin-right: 4rem;
    }

    .check {
        display: none;
    }

    .toggle {
        cursor: pointer;
        display: inline-block;
        position: relative;
        width: 38px;
        height: 22px;
        background-color: #7fd2e1;
        border-radius: 50px;
        transition: background-color 0.2s;
        margin-bottom: 0;
    }

    .light {
        position: absolute;
        background-color: #fff;
        transition: all 0.3s;
        border-radius: 50%;
    }

    .light1 {
        top: 4px;
        left: 13px;
        z-index: 0;
        width: 18px;
        height: 2px;
    }

    .light2 {
        top: 10px;
        left: 14px;
        z-index: 1;
        width: 24px;
        height: 2px;
    }

    .light3 {
        top: 16px;
        left: 12px;
        z-index: 0;
        width: 22px;
        height: 2px;
    }

    .light4 {
        top: 14px;
        left: 9px;
        z-index: 0;
        width: 2px;
        height: 2px;
        transform: translate3d(3px, 0, 0);
        opacity: 0;
        transition: all 0.3s;
    }

    .light5 {
        top: 30px;
        left: 15px;
        z-index: 0;
        width: 3px;
        height: 3px;
        transform: translate3d(3px, 0, 0);
        opacity: 0;
        transition: all 0.3s;
    }

    .light6 {
        top: 34px;
        left: 26px;
        z-index: 0;
        width: 2px;
        height: 2px;
        transform: translate3d(3px, 0, 0);
        opacity: 0;
        transition: all 0.3s;
    }

    .container-dark {
        display: inline-block;
        position: relative;
        z-index: 1;
        top: 3px;
        left: 1px;
        width: 16px;
        height: 16px;
        background-color: #e2be36;
        border-radius: 50px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        transition: all 0.4s;
        transform: translate3d(1px, 0px, 0px) rotate(0deg);

        .dark {
            position: absolute;
            background-color: #d4c99e;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
            border-radius: 100%;
        }

        .dark1 {
            top: 4px;
            left: 10px;
            width: 4px;
            height: 4px;
        }

        .dark2 {
            top: 8px;
            left: 3px;
            width: 3px;
            height: 3px;
        }

        .dark3 {
            top: 10px;
            left: 10px;
            width: 5px;
            height: 5px;
        }
    }

    .check {
        &:checked {
            + .toggle {
                background-color: #205081;

                &:before {
                    color: #205081;
                }

                &:after {
                    color: white;
                }

                .container-dark {
                    background-color: #f9e498;
                    transform: translate3d(18px, 0, 0) rotate(0);

                    .dark {
                        opacity: 1;
                    }
                }

                .light1 {
                    width: 2px;
                    height: 2px;
                    transform: translate3d(-3px, 0, 0);
                }

                .light2 {
                    width: 4px;
                    height: 4px;
                    transform: translate3d(-1px, -2px, 0);
                }

                .light3 {
                    width: 2px;
                    height: 2px;
                    transform: translate3d(1px, 0, 0);
                }

                .light4 {
                    opacity: 1;
                    transform: translate3d(-2px, 0, 0);
                    transition: all 0.3s;
                }
            }
        }
    }
`

const NavLink = styled(Link)`
    font-size: 1.8rem;
    color: var(--color-typo);
    text-decoration: none;
`

const Navbar = props => {
    return (
        <Navigation>
            <Brand>JohnWitch</Brand>
            <NavList>
                <NavItem>
                    <NavLink to="/">Top Games</NavLink>
                </NavItem>
                <NavItem className="controlos-dark-mode">
                    <input type="checkbox" class="check" id="check" onChange={props.onChange} checked={props.checked} />
                    <label for="check" class="toggle">
                        <div class="container-dark">
                            <span class="dark dark1"></span>
                            <span class="dark dark2"></span>
                            <span class="dark dark3"></span>
                        </div>
                        <span class="light light1"></span>
                        <span class="light light2"></span>
                        <span class="light light3"></span>
                        <span class="light light4"></span>
                        <span class="light light5"></span>
                        <span class="light light6"></span>
                    </label>
                </NavItem>
            </NavList>
        </Navigation>
    )
}

export default Navbar
