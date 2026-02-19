<template>
    <div>
        <!-- Simple BMA Cards Section -->
        <section class="bma-simple-section">
            <div class="bma-simple-container">
                <!-- Header -->
                <h2 class="bma-simple-title">
                    <span class="highlight"><i class="fas fa-shield-alt"></i> Accepted Health Insurance Partners  </span>
                </h2>
                                
                <!-- Insurance Cards -->
                <div class="cards-simple-grid">
                    <!-- NHIF Card -->
                    <div class="card-simple nhif-simple">
                        <div class="card-simple-icon">
                            <img src="/assets/nhif.jpg" alt="NHIF Logo" class="partner-logo">
                        </div>
                        <!-- <h3 class="card-simple-title">NHIF</h3> -->
                        <span class="card-simple-badge"><i class="fas fa-check-circle"></i> Accepted</span>
                    </div>
                    
                    <!-- Jubilee Card -->
                    <div class="card-simple jubilee-simple">
                        <div class="card-simple-icon">
                            <img src="/assets/jubilee.jpg" alt="Jubilee Insurance Logo" class="partner-logo">
                        </div>
                        <!-- <h3 class="card-simple-title">Jubilee</h3> -->
                        <span class="card-simple-badge"><i class="fas fa-check-circle"></i> Accepted</span>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
</template>

<style scoped>
.bma-simple-section {
    padding: 10px 10px;
    background: #f8fafd;
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bma-simple-container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.bma-simple-title {
    font-size: 2rem;
    /* margin: 4px 0 0 0; */
    font-weight: 700;
    color: #1a2634;
    margin-bottom: 10px;
    line-height: 1.3;
}

.highlight {
    color: #1e4b7c;
    position: relative;
    display: inline-block;
}

.highlight::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background: rgba(30, 75, 124, 0.2);
    z-index: -1;
    border-radius: 4px;
}

.partners-subtitle {
    color: #64748b;
    font-size: 1.1rem;
    margin-bottom: 30px;
    font-style: italic;
}

.cards-simple-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 30px;
}

.card-simple {
    background: white;
    padding: 10px 10px;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s;
    border: 2px solid transparent;
}

.card-simple:hover {
    transform: translateY(-5px);
}

.nhif-simple {
    border-color: #6e85eb;
}

.jubilee-simple {
    border-color: #ed1c24;
}

.card-simple-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    background: white;
    padding: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.partner-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
}

.nhif-simple .card-simple-icon {
    background: linear-gradient(135deg, #ffffff, #f0fff0);
    border: 1px solid rgba(78, 104, 247, 0.3);
}

.jubilee-simple .card-simple-icon {
    background: linear-gradient(135deg, #ffffff, #fff0f0);
    border: 1px solid rgba(237, 28, 36, 0.3);
}

.card-simple-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.nhif-simple .card-simple-title {
    color: #4b6bf7;
}

.jubilee-simple .card-simple-title {
    color: #ed1c24;
}

.card-simple-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.nhif-simple .card-simple-badge {
    background: #e8f5e9;
    color: #4b6bf7;
}

.jubilee-simple .card-simple-badge {
    background: #ffebee;
    color: #ed1c24;
}

.simple-message {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 25px;
    background: white;
    border-radius: 50px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    color: #1e4b7c;
    font-weight: 500;
    font-size: #4b6bf7;
    font-size: 1.2rem;
}

/* Mobile */
@media (max-width: 480px) {
    .cards-simple-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    .bma-simple-title {
        font-size: 1.6rem;
    }
    
    .card-simple {
        padding: 25px 15px;
    }
    
    .partners-subtitle {
        font-size: 1rem;
    }
    
    .card-simple-icon {
        width: 70px;
        height: 70px;
    }
}
</style>