
import React, {useState} from "react";
import { Col, Row, Card, Button, Form } from '@themesberg/react-bootstrap';
import { useHistory} from "react-router-dom";
import cogoToast from 'cogo-toast';

const user = JSON.parse(localStorage.getItem('user'));

const estimateTimeArr = [
    {value: 'Select a duration', label: 'Select a duration'},
    {value: 'More than 6 Months', label: 'More than 6 Months'},
    {value: '3 to 6 months', label: '3 to 6 months'},
    {value: '1 to 3 months', label: '1 to 3 months'},
    {value: 'less than 1 month', label: 'less than 1 month'},
]

const HireFreelancer = () => {
    const [price, setPrice] = useState("");
    const [detail, setDetail] = useState("");
    const [estimateTime, setEstimateTime] = useState("");
    const [isSubmitting, setSubmitting] = useState(false);
    
    const history = useHistory();


    const hireFreelancer = ()=>{
        try {
            let errorMsg = false;
            if(price === ''){
                cogoToast.error("Project Budget Require!",{
                    position: 'top-right',
                    hideAfter: 3,
                });   
                errorMsg = true;    
            }
            if(estimateTime === undefined && estimateTime === ''){
                cogoToast.error("Estimate Time Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });  
                errorMsg = true;     
            }
            if(detail === undefined && detail === ''){
                cogoToast.error("Project Detail Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });   
                errorMsg = true;    
            }
            if(!errorMsg){
               
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
    
                let jobDetail = {budget: price, detail: detail, estimateTime: estimateTime};
                
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: JSON.stringify(jobDetail),
                    redirect: 'follow'
                };
                console.log(user, "user", user._id)
                setSubmitting(true)
                fetch(`http://16.171.150.73/api/v1//${user._id}`, requestOptions)
                    .then(response => response.text())
                    .then((result) => {
                        let data = JSON.parse(result);
                        if(data.success) {
                            cogoToast.success(data.message,{
                              position: 'top-right',
                              hideAfter: 3,
                            });
                            history.push("/client-dashboard")
                          }
                          else{
                            cogoToast.error(data.message,{
                              position: 'top-right',
                              hideAfter: 3,
                            });
                          }
                    })
            }else{
                errorMsg = false;   
            }
            

        } catch (error) {
            cogoToast.error(error.message,{
                position: 'top-right',
                hideAfter: 3,
              });
        }
    }

  return (
    
    <>
      <Row className="mt-4 p-4">

        <Col xs={12} xl={8} className="mb-4 offset-2">
        <h1 className="job-like-title submit-project-heading2">Hire Freelancer for Project Title</h1>
          <Card border="light" className="shadow-sm">
            <Card.Body>
                <Row>
                    <h4 className="mb-0 project-count-heading heading20">Job Detail</h4>
                    <hr className="red-line"/>
                    <Col xs={12} sm={12} md={12} className="mb-3" >
                      <p className="proposal-detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illum repudiandae dolorem ad autem. Quod dolores suscipit fugit, dolor blanditiis impedit non, doloribus placeat sequi quae quibusdam earum incidunt iste.</p>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="price">
                            <Form.Label>Project Budget (USD)</Form.Label>
                            <Form.Control className="proposal-inputs" required type="number" placeholder="100" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="estimateTime">
                            <Form.Label>Duration</Form.Label>
                            <Form.Select className="proposal-inputs" value={estimateTime} onChange={(e)=>setEstimateTime(e.target.value)}>
                                {estimateTimeArr.map((item, i) => (
                                    <option value={item.value} key={i}>
                                        {item.label}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    {/* <Col md={12} className="mb-3">
                        <ClientLinkInput />
                    </Col> */}
                    <Col xs={12} sm={12} md={12} className="mt-3">
                    <strong>
                                <h6 className="mb-3 get-paid-heading">Description</h6>
                              </strong>
                              <textarea name="" id="" className="cover-text" rows="10" placeholder="Write Summery of Proposal!" onChange={(text)=>{setDetail(text.target.value)}} value={detail} />
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mt-3 offset-8">
                      <Button disabled={isSubmitting} onClick={hireFreelancer} className="m-1 personal-tab-update">{isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}Make Offer</Button>
                    </Col>
                </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HireFreelancer;